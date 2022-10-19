import React from "react";
import Header3 from "./Header3";

const Review = ({ id, name, comment }) => {
  return (
    <div className="flex flex-col items-center w-52">
      <img
        src="https://s00.yaplakal.com/pics/pics_original/1/9/0/14296091.jpg"
        className="w-24 h-32 rounded-xl mb-2"
      />
      <Header3 color="text-neutral-500" className="mb-3">
        {name}
      </Header3>
      <p className="font-Arsenal text-neutral-500 text-center">{comment}</p>
    </div>
  );
};

export default Review;
