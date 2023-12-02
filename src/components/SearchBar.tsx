import React from "react";
import './SearchBar.css';

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar">
      <input type="text" className="search-input" aria-label="Search Packages" />
      <button className="btn btn-secondary">Search</button>
    </div>
  );
};


/*

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

  */
export default SearchBar;