import React from "react";
import EventItem from "./EventItem";

function EventList({ events, deleteEvent }) {
  if (events.length === 0) {
    return (
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          textAlign: "center",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          color: "#666",
          fontSize: "18px",
        }}
      >
        📅 No Events Found
      </div>
    );
  }

  return (
    <div className="event-list">
      {events.map((event) => (
        <EventItem
          key={event.id}
          event={event}
          deleteEvent={deleteEvent}
        />
      ))}
    </div>
  );
}

export default React.memo(EventList);