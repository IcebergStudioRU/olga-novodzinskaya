import React from "react";

const GradientButton = ({
  type = "submit",
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`font-Arsenal text-xs text-white p-2 rounded-lg bg-gradient-to-b from-orange-300 to-red-500 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default GradientButton;
