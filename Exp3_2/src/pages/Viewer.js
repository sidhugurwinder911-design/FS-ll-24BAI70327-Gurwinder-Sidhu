import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Viewer() {

  return (
    <>
      <Navbar />

      <div className="dashboard">

        <Sidebar />

        <div className="content">

          <h2 className="text-success mb-4">
            Viewer Panel
          </h2>

          <div className="card shadow p-4">

            <h4>Viewer Permissions</h4>

            <ul className="mt-3">
              <li>View Dashboard</li>
              <li>Read Reports</li>
              <li>View Statistics</li>
            </ul>

            <button className="btn btn-success mt-3">
              View Reports
            </button>

          </div>

        </div>

      </div>

    </>
  );
}

export default Viewer;