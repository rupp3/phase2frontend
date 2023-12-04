import React from "react";
import { Link } from "react-router-dom";
import "./ButtonGroup.css";

const ButtonGroup: React.FC = () => {
  return (
    <div className="button-group">
      <Link to="/download" className="btn btn-secondary">
        Download
      </Link>
      <Link to="/update" className="btn btn-secondary">
        Update
      </Link>
      <Link to="/rate" className="btn btn-secondary">
        Rate
      </Link>
      <Link to="/upload" className="btn btn-secondary">
        Upload
      </Link>
    </div>
  );
};

export default ButtonGroup;
