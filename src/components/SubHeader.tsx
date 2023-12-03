import React from "react";
import "./SubHeader.css";

interface SubHeaderProps {
  packageName: string;
}

const SubHeader: React.FC<SubHeaderProps> = ({
  packageName
}) => {
  return <div className="package-name">{packageName}</div>;
};

export default SubHeader;