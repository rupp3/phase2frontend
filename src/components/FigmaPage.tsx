import React from "react";
import './FigmaPage.css'

interface MyComponentProps {
  // define props here
}

const FigmaPage: React.FC<MyComponentProps> = (props) => {
  return (
    <>
      <Header />
      <ButtonGroup />
      <div className="divider" />
      <PackageName />
    </>
  );
};

const Header: React.FC = () => {
  return (
    <header className="main-container">
      <div className="header">
        <SearchBar />
      </div>
    </header>
  );
};

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar">
      <input type="text" className="search-input" aria-label="Search Packages" />
      <button className="button">Search</button>
    </div>
  );
};

const ButtonGroup: React.FC = () => {
  return (
    <div className="button-group">
      <button className="button">Download</button>
      <button className="button">Update</button>
      <button className="button">Rate</button>
      <button className="button">Upload</button>
    </div>
  );
};

const PackageName: React.FC = () => {
  return <div className="package-name">Package Name</div>;
};

export default FigmaPage;