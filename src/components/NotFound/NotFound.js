import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="parent-container">
      <div className="container">
        <h2>404</h2>
        <h4>Opps! Page Not Found</h4>
        <button>
          <Link to="/">Got To Home</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
