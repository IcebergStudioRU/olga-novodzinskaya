import React from "react";

const Section = ({
  id,
  backgroundColor,
  justify = "between",
  className = "",
  children,
}) => {
  return (
    <section
      id={id}
      className={`
        ${className}
        flex flex-col justify-${justify} items-center
        ${backgroundColor} 
      `}
    >
      {children}
    </section>
  );
};

export default Section;
