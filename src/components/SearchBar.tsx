import React from "react";
import './SearchBar.css';
import Button from "./Button";

function SearchBar() {
  return (
    <div className="main-container">
      <div className="image-wrapper">
        <div className="description">Search Packages...</div>
        <Button onClick={()=> console.log('clicked search, should lead to search option eventually')}>Search</Button>
      </div>
    </div>
  );
  };
export default SearchBar;