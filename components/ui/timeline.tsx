import React from "react";

interface Event {
  heading: string;
  body: React.ReactNode;
}

const Timeline = ({ events }: { events: Event[] }) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-2 top-1 bottom-0 w-1 bg-white"></div>

      {events.map((event, index) => (
        <div
          key={index}
          className={`relative pl-8 ${index === events.length - 1 ? "" : "pb-4"}`}
        >
          {/* Circle */}
          <div className="absolute left-0 top-1 w-5 h-5 bg-gray-900 rounded-full border-4 border-white"></div>
          {/* Content */}
          <div>
            <h3 className="text-l font-bold mb-1 inline">
              {event.heading}
              <span style={{ whiteSpace: "nowrap" }}>{" {"}</span>{" "}
              {/* Prevent wrapping */}
            </h3>
            <div className="ml-8 text-sm">{event.body}</div>
            <h3 className="text-l font-bold mb-1">{"}"}</h3>
          </div>{" "}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
