import React from "react";
import { BrowserRouter as Outlet, useParams } from "react-router-dom";
import Content from "./Content";

interface ContentProps {
    packageDescription: string;
    githubLink: string;
  }
  
  const PackageDetails: React.FC = () => {
    const { packageName } = useParams();
  
    let package_description = "this is a package";
  
    return (
      <Content
        packageDescription={package_description}
        githubLink={`github.com/${packageName}`}
      />
    );
  };
  export default PackageDetails;