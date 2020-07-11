import React from "react";
import "./spinner.style.scss";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading... </span>
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default Spinner;
