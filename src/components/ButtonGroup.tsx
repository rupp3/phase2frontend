import React from "react";
import "./ButtonGroup.css";
const ButtonGroup: React.FC = () => {
    return (
      <div className="button-group">
        <button className="btn btn-secondary">Download</button>
        <button className="btn btn-secondary">Update</button>
        <button className="btn btn-secondary">Rate</button>
        <button className="btn btn-secondary">Upload</button>
      </div>
    );
  };
  export default ButtonGroup;