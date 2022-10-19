import React from "react";
import FilledButton from "./FilledButton";

const Service = ({ id, name, description, buttonText }) => {
  return (
    <div className="bg-white flex flex-col items-center rounded-3xl gap-y-1.5 pb-2 pt-0 w-60 h-36 shadow-lg">
      <h3 className="font-Arsenal font-bold text-lg text-neutral-500 whitespace-nowrap w-44 text-center">
        {name}
      </h3>
      <p className="text-xs font-normal text-neutral-500 grow text-center break-words w-44 h-12">
        {description}
      </p>
      <FilledButton backgroundColor="bg-red-300" textColor="text-white">
        {buttonText}
      </FilledButton>
    </div>
  );
};

export default Service;
