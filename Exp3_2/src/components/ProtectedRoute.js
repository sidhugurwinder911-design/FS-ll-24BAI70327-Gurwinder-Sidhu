import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function ProtectedRoute({ children, allowedRoles }) {

  const { role } = useContext(AuthContext);

  if (!role) {
    return <Navigate to="/" />;
  }

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
}

export default ProtectedRoute;