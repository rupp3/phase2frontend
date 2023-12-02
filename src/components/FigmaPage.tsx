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
export default FigmaPage;