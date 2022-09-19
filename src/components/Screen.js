import React from "react";
import Header from "./Header";
import FamilyImg from "../assets/screen-family.png";

const Screen = ({ children }) => {
  return (
    <>
      <div className="bg-fuchsia-50 mb:h-520 relative">
        <Header />
        <img className="absolute bottom-0 right-0 mb:max-w-480 tl:max-w-650" src={FamilyImg} />
      </div>
    </>
  );
};

export default Screen;
