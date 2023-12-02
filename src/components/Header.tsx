import React from "react";
import SearchBar from "./SearchBar";
import "./Header.css";
const Header: React.FC = () => {
    return (
      <header className="main-container">
        <div className="header">
          <SearchBar />
        </div>
      </header>
    );
  };
  export default Header;