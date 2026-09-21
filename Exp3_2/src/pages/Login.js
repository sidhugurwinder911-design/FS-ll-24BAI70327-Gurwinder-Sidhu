import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import {
  FaUserShield,
  FaUserEdit,
  FaUser,
  FaLock,
  FaUserCircle
} from "react-icons/fa";

import "./Login.css";

function Login() {

  const navigate = useNavigate();
  const { setRole } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setSelectedRole] = useState("");

  const handleLogin = () => {

    if (username !== "sidhu_gurwinder07") {
      alert("Invalid Username");
      return;
    }

    if (password !== "0000") {
      alert("Invalid Password");
      return;
    }

    if (role === "") {
      alert("Please Select a Role");
      return;
    }

    setRole(role);

    navigate("/dashboard");

  };

  return (

    <div className="login-page">

      <div className="overlay">

        <h1 className="title">

          🔐 ROLE BASED ACCESS CONTROL

        </h1>

        <p className="subtitle">

          Secure Authentication System

          <br />

          Chandigarh University | Full Stack Practical

        </p>

        <div className="login-card">

          <div className="input-group">

            <FaUserCircle className="input-icon"/>

            <input

              type="text"

              placeholder="Username"

              value={username}

              onChange={(e)=>setUsername(e.target.value)}

            />

          </div>

          <div className="input-group">

            <FaLock className="input-icon"/>

            <input

              type="password"

              placeholder="Password"

              value={password}

              onChange={(e)=>setPassword(e.target.value)}

            />

          </div>

          <h3 className="role-heading">

            Select Your Role

          </h3>

          <div className="roles">

            <div

              className={`role ${role==="Admin"?"active":""}`}

              onClick={()=>setSelectedRole("Admin")}

            >

              <FaUserShield size={50}/>

              <h4>ADMIN</h4>

              <p>Full Access</p>

            </div>

            <div

              className={`role ${role==="Editor"?"active":""}`}

              onClick={()=>setSelectedRole("Editor")}

            >

              <FaUserEdit size={50}/>

              <h4>EDITOR</h4>

              <p>Edit Access</p>

            </div>

            <div

              className={`role ${role==="Viewer"?"active":""}`}

              onClick={()=>setSelectedRole("Viewer")}

            >

              <FaUser size={50}/>

              <h4>VIEWER</h4>

              <p>Read Only</p>

            </div>

          </div>

          <button

            className="login-btn"

            onClick={handleLogin}

          >

            🔐 LOGIN

          </button>

        </div>

      </div>

    </div>

  );

}

export default Login;