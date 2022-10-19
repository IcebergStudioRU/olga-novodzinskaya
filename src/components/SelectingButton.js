import React from "react";

const SelectingButton = ({ isActive, defaultColor, activeColor, onClick }) => {
  return (
    <button
      className={`w-14 h-2 ${isActive ? activeColor : defaultColor} rounded-lg`}
      type="button"
      onClick={onClick}
    ></button>
  );
};

export default SelectingButton;
