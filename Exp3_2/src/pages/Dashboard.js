import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  FaUsers,
  FaUserShield,
  FaChartLine,
  FaClipboardList,
  FaArrowUp
} from "react-icons/fa";

function Dashboard() {

  const navigate = useNavigate();

  const { role, setRole } = useContext(AuthContext);

  const logout = () => {
    setRole("");
    navigate("/");
  };

  return (

    <>

      <Navbar />

      <div className="dashboard">

        <Sidebar />

        <div className="content">

          <div className="top-section">

            <div>

              <h2>Welcome, {role}</h2>

              <p>
                Logged in as
                <strong> sidhu_gurwinder07</strong>
              </p>

            </div>

            <button
              className="btn btn-danger"
              onClick={logout}
            >
              Logout
            </button>

          </div>

          <div className="row">

            <div className="col-md-3">

              <div className="dashboard-card">

                <FaUsers className="card-icon text-primary"/>

                <h5>Total Users</h5>

                <h2>250</h2>

              </div>

            </div>

            <div className="col-md-3">

              <div className="dashboard-card">

                <FaUserShield className="card-icon text-danger"/>

                <h5>Your Role</h5>

                <h2>{role}</h2>

              </div>

            </div>

            <div className="col-md-3">

              <div className="dashboard-card">

                <FaChartLine className="card-icon text-success"/>

                <h5>Reports</h5>

                <h2>35</h2>

              </div>

            </div>

            <div className="col-md-3">

              <div className="dashboard-card">

                <FaClipboardList className="card-icon text-warning"/>

                <h5>Tasks</h5>

                <h2>18</h2>

              </div>

            </div>

          </div>

          <div className="row mt-4">

            <div className="col-md-8">

              <div className="dashboard-card">

                <h4>Role Permissions</h4>

                <hr/>

                {role==="Admin" && (

                  <ul>

                    <li>Manage Users</li>

                    <li>Assign Roles</li>

                    <li>Edit Data</li>

                    <li>Delete Records</li>

                    <li>View Reports</li>

                  </ul>

                )}

                {role==="Editor" && (

                  <ul>

                    <li>Edit Content</li>

                    <li>Manage Posts</li>

                    <li>View Reports</li>

                  </ul>

                )}

                {role==="Viewer" && (

                  <ul>

                    <li>Read Reports</li>

                    <li>View Dashboard</li>

                  </ul>

                )}

              </div>

            </div>

            <div className="col-md-4">

              <div className="dashboard-card">

                <h4>System Status</h4>

                <hr/>

                <p>

                  <FaArrowUp className="text-success"/>

                  Server Status :
                  <strong> Online</strong>

                </p>

                <p>

                  Active Users :
                  <strong> 230</strong>

                </p>

                <p>

                  Last Login :
                  <strong> Today</strong>

                </p>

              </div>

            </div>

          </div>

          <div className="dashboard-card mt-4">

            <h4>Quick Actions</h4>

            <br/>

            {role==="Admin" && (

              <>

                <button
                  className="btn btn-primary me-3"
                  onClick={()=>navigate("/admin")}
                >
                  Admin Panel
                </button>

                <button className="btn btn-danger me-3">
                  Manage Users
                </button>

              </>

            )}

            {(role==="Admin" || role==="Editor") && (

              <button
                className="btn btn-warning me-3"
                onClick={()=>navigate("/editor")}
              >
                Editor Panel
              </button>

            )}

            <button
              className="btn btn-success"
              onClick={()=>navigate("/viewer")}
            >
              Viewer Panel
            </button>

          </div>

        </div>

      </div>

    </>

  );

}

export default Dashboard;