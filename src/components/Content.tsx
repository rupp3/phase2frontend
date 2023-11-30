import React from "react";
import './Content.css';

interface ContentProps {
  packageName: string;
  packageDescription: string;
  githubLink: string;
}

const Content: React.FC<ContentProps> = ({
  packageName,
  packageDescription,
  githubLink,
}) => {
    return (
        <div className="main-container">
          <div className="image-wrapper">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ba4d2d2-3f58-4aaa-b670-3ae43e733c59?apiKey=3f9125d4ccff46e9b7e8f384412ee146&"
              className="img"
            />
            {packageName}
          </div>
          <div className="description">{packageDescription}</div>
          <div className="github-link">GitHub: {githubLink}</div>
        </div>
      );
    };
    

export default Content;