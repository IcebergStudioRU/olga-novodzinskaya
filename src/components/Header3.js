import React from "react";

const Header3 = ({ color, className, children }) => {
  return (
    <h2 className={`font-Arsenal text-base font-bold ${color} ${className}`}>
      {children}
    </h2>
  );
};

export default Header3;
