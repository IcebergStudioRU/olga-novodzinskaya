import React from "react";

const FilledButton = ({
  backgroundColor,
  textColor,
  type,
  value,
  children,
}) => {
  return (
    <button
      className={`
        rounded-2xl 
        font-Arsenal text-sm underline 
        py-2 px-5 
        ${backgroundColor} 
        ${textColor}
      `}
      type={type || "submit"}
    >
      {value || children}
    </button>
  );
};

export default FilledButton;
