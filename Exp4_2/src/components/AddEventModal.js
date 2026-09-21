import React, { useState } from "react";

function AddEventModal({ addEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("High");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !date) {
      alert("Please fill all fields");
      return;
    }

    addEvent({
      title,
      date,
      priority,
    });

    setTitle("");
    setDate("");
    setPriority("High");
  };

  return (
    <div className="add-event">
      <h2>📅 Add New Event</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-row">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <button type="submit" className="add-btn">
            ➕ Add Event
          </button>
        </div>
      </form>
    </div>
  );
}

export default React.memo(AddEventModal);