import React from "react";

const Advantage = ({ SVGIconComponent, children }) => {
  return (
    <div className="flex flex-col items-center">
      <SVGIconComponent />
      <p className="font-Arsenal text-xs text-center">{children}</p>
    </div>
  );
};

export default Advantage;
