import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-full py-10 px-12 absolute text-white  bottom-32">
      <h1 className="text-4xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg w-1/3 text-white">{overview}</p>
      <div className="flex ">
        <button className="bg-white text-black border w-28 py-2 text-center mr-2 rounded-lg hover:bg-opacity-80 font-medium"> Play</button>
        <button className="bg-black text-white  w-28 py-2  rounded-lg hover:bg-opacity-90">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
