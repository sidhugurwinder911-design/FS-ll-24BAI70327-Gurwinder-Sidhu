import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {

  const { role } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-dark bg-dark px-4">

      <h4 className="text-white m-0">
        RBAC Dashboard
      </h4>

      <div className="text-white">

        <FaUserCircle size={28} />

        <span className="ms-2">
          {role}
        </span>

      </div>

    </nav>
  );

}

export default Navbar;