import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Admin() {

  return (
    <>
      <Navbar />

      <div className="dashboard">

        <Sidebar />

        <div className="content">

          <h2 className="text-danger mb-4">
            Admin Panel
          </h2>

          <div className="card shadow p-4">

            <h4>Administrator Permissions</h4>

            <ul className="mt-3">
              <li>Manage Users</li>
              <li>Create New Roles</li>
              <li>Delete Accounts</li>
              <li>View Analytics</li>
              <li>System Configuration</li>
            </ul>

            <button className="btn btn-danger mt-3">
              Manage Users
            </button>

          </div>

        </div>

      </div>

    </>
  );
}

export default Admin;