"use client";

import React, { useRef, useState, useEffect } from "react";
import Matter from "matter-js";

interface FallingTextProps {
  /** Instead of passing in a string, you pass arbitrary React nodes */
  children?: React.ReactNode;
  trigger?: "auto" | "scroll" | "click" | "hover";
  backgroundColor?: string;
  wireframes?: boolean;
  gravity?: number;
  mouseConstraintStiffness?: number;
}

const FallingText: React.FC<FallingTextProps> = ({
  children,
  trigger = "auto",
  backgroundColor = "transparent",
  wireframes = false,
  gravity = 0.8,
  mouseConstraintStiffness = 0.2,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);

  const [effectStarted, setEffectStarted] = useState(false);

  // Start the effect based on the trigger type.
  useEffect(() => {
    if (trigger === "auto") {
      setEffectStarted(true);
      return;
    }
    if (trigger === "scroll" && containerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setEffectStarted(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [trigger]);

  // This useEffect starts the Matter.js physics simulation once the effect is triggered.
  useEffect(() => {
    if (!effectStarted) return;

    const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } =
      Matter;

    if (!containerRef.current || !canvasContainerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const width = containerRect.width;
    const height = containerRect.height;
    if (width <= 0 || height <= 0) return;

    const engine = Engine.create();
    engine.world.gravity.y = gravity;

    const render = Render.create({
      element: canvasContainerRef.current,
      engine,
      options: {
        width,
        height,
        background: backgroundColor,
        wireframes,
      },
    });

    // Create boundaries so that words don’t fly off
    const boundaryOptions = {
      isStatic: true,
      render: { fillStyle: "transparent" },
    };
    const floor = Bodies.rectangle(
      width / 2,
      height + 25,
      width,
      50,
      boundaryOptions
    );
    const leftWall = Bodies.rectangle(
      -25,
      height / 2,
      50,
      height,
      boundaryOptions
    );
    const rightWall = Bodies.rectangle(
      width + 25,
      height / 2,
      50,
      height,
      boundaryOptions
    );
    const ceiling = Bodies.rectangle(
      width / 2,
      -25,
      width,
      50,
      boundaryOptions
    );

    if (!textRef.current) return;
    const wordSpans = textRef.current.querySelectorAll(".falling-word");
    const wordBodies = Array.from(wordSpans).map((elem) => {
      const rect = elem.getBoundingClientRect();
      const x = rect.left - containerRect.left + rect.width / 2;
      const y = rect.top - containerRect.top + rect.height / 2;
      const body = Bodies.rectangle(x, y, rect.width, rect.height, {
        render: { fillStyle: "transparent" },
        restitution: 0.8,
        frictionAir: 0.01,
        friction: 0.2,
      });
      Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 5,
        y: 0,
      });
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);
      return { elem, body };
    });

    // Set initial absolute positions for the falling words.
    wordBodies.forEach(({ elem, body }) => {
      elem.style.position = "absolute";
      const w = body.bounds.max.x - body.bounds.min.x;
      const h = body.bounds.max.y - body.bounds.min.y;
      elem.style.left = `${body.position.x - w / 2}px`;
      elem.style.top = `${body.position.y - h / 2}px`;
      elem.style.transform = "none";
    });

    // Add mouse control to the physics simulation.
    const mouse = Mouse.create(containerRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: mouseConstraintStiffness,
        render: { visible: false },
      },
    });
    render.mouse = mouse;

    World.add(engine.world, [
      floor,
      leftWall,
      rightWall,
      ceiling,
      mouseConstraint,
      ...wordBodies.map((wb) => wb.body),
    ]);

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    // Update loop: update DOM positions based on Matter.js simulation.
    const updateLoop = () => {
      wordBodies.forEach(({ body, elem }) => {
        const { x, y } = body.position;
        const w = body.bounds.max.x - body.bounds.min.x;
        const h = body.bounds.max.y - body.bounds.min.y;
        elem.style.left = `${x - w / 2}px`;
        elem.style.top = `${y - h / 2}px`;
        elem.style.transform = `rotate(${body.angle}rad)`;
      });
      Matter.Engine.update(engine);
      requestAnimationFrame(updateLoop);
    };
    updateLoop();

    // Clean up when the component is unmounted or re-rendered.
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      if (render.canvas && canvasContainerRef.current) {
        canvasContainerRef.current.removeChild(render.canvas);
      }
      World.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, [
    effectStarted,
    gravity,
    wireframes,
    backgroundColor,
    mouseConstraintStiffness,
  ]);

  const handleTrigger = () => {
    if (!effectStarted && (trigger === "click" || trigger === "hover")) {
      setEffectStarted(true);
    }
  };

  // ── Render ─────────────────────────────────────────────────────────
  return (
    <div
      ref={containerRef}
      className="relative z-[1] w-full h-full cursor-pointer text-center overflow-hidden"
      onClick={trigger === "click" ? handleTrigger : undefined}
      onMouseOver={trigger === "hover" ? handleTrigger : undefined}
      style={{ minHeight: "400px", minWidth: "300px" }} // Set minimum size
    >
      <div ref={textRef} className="inline-block">
        {wrapWords(children)}
      </div>
      <div className="absolute top-0 left-0 z-0" ref={canvasContainerRef} />
    </div>
  );
};

const wrapWords = (node: React.ReactNode): React.ReactNode => {
  if (typeof node === "string") {
    // Split the string into tokens that include whitespace.
    const tokens = node.split(/(\s+)/);
    return tokens.map((token, index) => {
      // Preserve whitespace without wrapping.
      if (/\s+/.test(token)) {
        return token;
      }
      return (
        <span
          key={index}
          className="falling-word inline-block mx-[2px] select-none"
        >
          {token}
        </span>
      );
    });
  }
  if (React.isValidElement(node)) {
    return React.cloneElement(node, {
      ...node.props,
      children: React.Children.map(node.props.children, wrapWords),
    });
  }
  if (Array.isArray(node)) {
    return node.map((child, index) => (
      <React.Fragment key={index}>{wrapWords(child)}</React.Fragment>
    ));
  }
  return node;
};

export default FallingText;
