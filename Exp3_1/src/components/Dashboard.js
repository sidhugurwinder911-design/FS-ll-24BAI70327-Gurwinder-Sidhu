import React from "react";

function Dashboard({ token, setToken }) {

  const payload = JSON.parse(atob(token.split(".")[1]));

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <div className="container">

      <h1>Dashboard</h1>

      <h2>Welcome, {payload.username}</h2>

      <h3>Role : {payload.role}</h3>

      <p className="success">
        ✅ JWT Token Stored Successfully
      </p>

      <textarea
        rows="5"
        readOnly
        value={token}
      />

      <button onClick={logout}>
        Logout
      </button>

    </div>
  );
}

export default Dashboard;