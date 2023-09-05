import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-screen aspect-video pt-36 px-12 absolute bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold text-white">{title}</h1>
      <p className="w-2/4 my-6 text-white">{description}</p>
      <div>
        <button className="p-2 px-10 font-bold bg-white rounded-md border border-gray-600 hover:bg-opacity-70">
          ▶ Play
        </button>
        <button className="p-2 px-10 mx-2 font-bold bg-white border border-gray-600 rounded-md hover:bg-opacity-70">
          {" "}
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
