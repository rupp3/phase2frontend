import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ButtonGroup from "./components/ButtonGroup";
import Content from "./components/Content";
import SubHeader from "./components/SubHeader";
import PackageDetails from "./components/PackageDetails";

function App() {
  let package_name = "GitHub Package Name";
  return (
    <Router>
      <div>
        <Header />
        <SubHeader packageName={package_name} />
        <ButtonGroup />
        <div className="divider" />
        <Routes>
          <Route path="/package/:packageName" element={<PackageDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
