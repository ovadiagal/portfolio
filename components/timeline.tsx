import React from "react";

interface Event {
    heading: string;
    location: string;
    date: string;
}

const Timeline = ({ events }: { events: Event[] }) => {
    return (
        <div className="relative">
            <div className="absolute left-2 top-1 bottom-0 w-1 bg-white rounded-full"></div>
            {events.map((event, index) => (
                <div
                    key={index}
                    className={`relative pl-8 ${index === events.length - 1 ? "" : "pb-4"}`}
                >
                    <div className="absolute left-0 top-1 w-5 h-5 bg-gray-900 rounded-full border-4 border-white"></div>
                    <div>
                        <h3 className="text-l font-bold mb-1 inline">
                            <span>
                                {event.heading}&nbsp;{"{"}
                            </span>
                        </h3>
                        <div className="ml-4 text-sm">
                            <span>{event.location};</span>
                            <br />
                            <span>{event.date};</span>
                        </div>
                        <h3 className="text-l font-bold mb-1">
                            <span>{"}"}</span>
                        </h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
