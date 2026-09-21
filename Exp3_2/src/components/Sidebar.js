import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import {
  FaHome,
  FaUserShield,
  FaEdit,
  FaEye
} from "react-icons/fa";

function Sidebar() {

  const { role } = useContext(AuthContext);

  return (

    <div className="sidebar">

      <h3 className="text-center text-white mb-4">
        MENU
      </h3>

      <Link to="/dashboard">
        <FaHome /> Dashboard
      </Link>

      {role === "Admin" && (

        <Link to="/admin">
          <FaUserShield /> Admin
        </Link>

      )}

      {(role === "Admin" || role === "Editor") && (

        <Link to="/editor">
          <FaEdit /> Editor
        </Link>

      )}

      <Link to="/viewer">
        <FaEye /> Viewer
      </Link>

    </div>

  );

}

export default Sidebar;