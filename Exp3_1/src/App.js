import React, { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <div>
      {token ? (
        <Dashboard token={token} setToken={setToken} />
      ) : (
        <Login setToken={setToken} />
      )}
    </div>
  );
}

export default App;