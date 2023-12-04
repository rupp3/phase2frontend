import React from "react";
import './Content.css';

interface ContentProps {
  packageDescription: string;
  githubLink: string;
}

const Content: React.FC<ContentProps> = ({
  packageDescription,
  githubLink,
}) => {
    return (
        <div className="main-container">
          <div className="image-wrapper">
          </div>
          <div className="description">{packageDescription}</div>
          <a href="https://www.github.com" className="custom-link">{githubLink}</a>
          
        </div>
      );
    };    

export default Content;