import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthProvider from "./context/AuthContext";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Editor from "./pages/Editor";
import Viewer from "./pages/Viewer";
import Unauthorized from "./pages/Unauthorized";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (

    <AuthProvider>

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Login />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={["Admin"]}>
                <Admin />
              </ProtectedRoute>
            }
          />

          <Route
            path="/editor"
            element={
              <ProtectedRoute allowedRoles={["Admin", "Editor"]}>
                <Editor />
              </ProtectedRoute>
            }
          />

          <Route
            path="/viewer"
            element={
              <ProtectedRoute
                allowedRoles={["Admin", "Editor", "Viewer"]}
              >
                <Viewer />
              </ProtectedRoute>
            }
          />

          <Route path="/unauthorized" element={<Unauthorized />} />

        </Routes>

      </BrowserRouter>

    </AuthProvider>

  );
}

export default App;