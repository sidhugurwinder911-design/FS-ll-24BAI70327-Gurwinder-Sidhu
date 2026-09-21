import React from "react";
import { Link } from "react-router-dom";

function Unauthorized() {

  return (

    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh", background: "#f5f5f5" }}
    >

      <div className="text-center">

        <h1
          style={{
            fontSize: "90px",
            color: "red"
          }}
        >
          403
        </h1>

        <h2>Access Denied</h2>

        <p>
          You are not authorized to access this page.
        </p>

        <Link to="/" className="btn btn-primary">
          Back to Login
        </Link>

      </div>

    </div>

  );

}

export default Unauthorized;