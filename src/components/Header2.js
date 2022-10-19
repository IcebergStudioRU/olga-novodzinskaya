import React from "react";

const Header2 = ({ color, className = "", children }) => {
  return (
    <h2 className={`font-Lobster text-3xl ${color} ${className}`}>
      {children}
    </h2>
  );
};

export default Header2;
