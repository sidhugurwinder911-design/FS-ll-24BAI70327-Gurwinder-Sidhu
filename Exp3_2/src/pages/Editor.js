import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Editor() {

  return (
    <>
      <Navbar />

      <div className="dashboard">

        <Sidebar />

        <div className="content">

          <h2 className="text-warning mb-4">
            Editor Panel
          </h2>

          <div className="card shadow p-4">

            <h4>Editor Permissions</h4>

            <ul className="mt-3">
              <li>Edit Articles</li>
              <li>Publish Content</li>
              <li>Update Dashboard</li>
              <li>Review Posts</li>
            </ul>

            <button className="btn btn-warning mt-3">
              Edit Content
            </button>

          </div>

        </div>

      </div>

    </>
  );
}

export default Editor;