import React, { useState } from "react";

function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "sidhu_gurwinder07" && password === "1234") {

      const payload = {
        username: "sidhu_gurwinder07",
        role: "Student",
      };

      const token =
        "header." + btoa(JSON.stringify(payload)) + ".signature";

      localStorage.setItem("token", token);

      setToken(token);

    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="container">

      <h1>JWT Authentication</h1>

      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>

      <div className="demo">
        <h3>Demo Login Credentials</h3>

        <p><b>Username :</b> sidhu_gurwinder07</p>

        <p><b>Password :</b> 1234</p>
      </div>

    </div>
  );
}

export default Login;