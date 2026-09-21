import React from "react";

function EventItem({ event, deleteEvent }) {
  const getPriorityColor = () => {
    switch (event.priority) {
      case "High":
        return "#ef4444";
      case "Medium":
        return "#f59e0b";
      default:
        return "#22c55e";
    }
  };

  return (
    <div
      className="event-card"
      style={{
        borderLeft: `8px solid ${getPriorityColor()}`
      }}
    >
      <h3>🟢 {event.title}</h3>

      <p>
        <strong>📅 Date :</strong> {event.date}
      </p>

      <p>
        <strong>🔥 Priority :</strong>{" "}
        <span
          style={{
            color: getPriorityColor(),
            fontWeight: "bold",
          }}
        >
          {event.priority}
        </span>
      </p>

      <div className="actions">
        <button
          className="edit-btn"
          onClick={() => alert("Edit functionality for demo")}
        >
          ✏ Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteEvent(event.id)}
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
}

export default React.memo(EventItem);