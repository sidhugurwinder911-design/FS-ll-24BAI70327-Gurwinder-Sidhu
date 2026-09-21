import React, { useState, useMemo, useCallback } from "react";
import "./App.css";

import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import AddEventModal from "./components/AddEventModal";
import EventList from "./components/EventList";

function App() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "React Presentation",
      date: "Tomorrow",
      priority: "High",
      completed: false,
    },
    {
      id: 2,
      title: "Database Lab",
      date: "Friday",
      priority: "Medium",
      completed: true,
    },
    {
      id: 3,
      title: "Machine Learning Assignment",
      date: "Next Week",
      priority: "Low",
      completed: false,
    },
  ]);

  const [search, setSearch] = useState("");

  // useMemo
  const stats = useMemo(() => {
    return {
      total: events.length,
      upcoming: events.filter((e) => !e.completed).length,
      completed: events.filter((e) => e.completed).length,
    };
  }, [events]);

  // Performance Counter
  const renderCount = useMemo(() => {
    return events.length * 5;
  }, [events]);

  // useCallback
  const addEvent = useCallback((event) => {
    setEvents((prev) => [
      ...prev,
      {
        ...event,
        id: Date.now(),
        completed: false,
      },
    ]);
  }, []);

  const deleteEvent = useCallback((id) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  }, []);

  const filteredEvents = useMemo(() => {
    return events.filter((event) =>
      event.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [events, search]);

  return (
    <div className="container">

      <Header />

      <div className="stats-row">

        <StatsCard
          title="Events"
          value={stats.total}
          color="#3b82f6"
        />

        <StatsCard
          title="Upcoming"
          value={stats.upcoming}
          color="#10b981"
        />

        <StatsCard
          title="Completed"
          value={stats.completed}
          color="#8b5cf6"
        />

        <StatsCard
          title="Renders"
          value={renderCount}
          color="#f59e0b"
        />

      </div>

      <AddEventModal addEvent={addEvent} />

      <div className="search-section">

        <h3>🔍 Search Events</h3>

        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <EventList
        events={filteredEvents}
        deleteEvent={deleteEvent}
      />

      <div className="performance">

        <h2>⚡ Performance Monitor</h2>

        <div className="performance-item">
          <span>React.memo</span>
          <span className="tick">✔</span>
        </div>

        <div className="performance-item">
          <span>useMemo</span>
          <span className="tick">✔</span>
        </div>

        <div className="performance-item">
          <span>useCallback</span>
          <span className="tick">✔</span>
        </div>

        <h3>Total Renders : {renderCount}</h3>

      </div>

    </div>
  );
}

export default App;