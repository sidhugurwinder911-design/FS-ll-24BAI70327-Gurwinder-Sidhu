import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./App.css";

function App() {
  const [events, setEvents] = useState([]);

  const handleDateClick = (info) => {
    const title = prompt("Enter Post Title");

    if (title) {
      setEvents([
        ...events,
        {
          title: title,
          date: info.dateStr,
        },
      ]);
    }
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h1>📅 Social Media Scheduler</h1>
        <p>Plan • Schedule • Publish Your Posts</p>
      </div>

      {/* Dashboard */}
      <div className="dashboard">
        <div className="card">
          <h2>{events.length}</h2>
          <p>Total Posts</p>
        </div>

        <div className="card">
          <h2>📆</h2>
          <p>Calendar</p>
        </div>

        <div className="card">
          <h2>🚀</h2>
          <p>Easy Scheduling</p>
        </div>
      </div>

      {/* Calendar */}
      <div className="calendar-box">
        <FullCalendar
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
          ]}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          events={events}
          dateClick={handleDateClick}
          height="auto"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
        />
      </div>

      {/* Footer */}
      <div className="footer">
        © 2026 Social Media Scheduler | React + FullCalendar
      </div>
    </div>
  );
}

export default App;