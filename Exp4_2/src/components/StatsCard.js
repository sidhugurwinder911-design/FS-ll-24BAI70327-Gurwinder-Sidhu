import React from "react";

function StatsCard({ title, value, color }) {
  return (
    <div
      className="stat-card"
      style={{
        borderTop: `6px solid ${color}`,
      }}
    >
      <h3>{title}</h3>

      <h1
        style={{
          color: color,
        }}
      >
        {value}
      </h1>
    </div>
  );
}

export default React.memo(StatsCard);