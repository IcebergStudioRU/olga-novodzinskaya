import React from "react";

const Header1 = ({ color, className = "", children }) => {
  return (
    <h1 className={`font-Lobster text-3xl ${color} ${className}`}>
      {children}
    </h1>
  );
};

export default Header1;
