import React from "react";

const RadioButton = ({
  id,
  name,
  value,
  selectedValue,
  defaultColor,
  activeColor,
  ...props
}) => {
  const isSelected = value === selectedValue;

  return (
    <>
      <input hidden type="radio" id={id} name={name} value={value} {...props} />
      <label
        htmlFor={id}
        className={`
            w-44 h-11 rounded-lg
            flex justify-center items-center 
            ${isSelected ? activeColor : defaultColor}
          `}
      >
        {value}
      </label>
    </>
  );
};

export default RadioButton;
