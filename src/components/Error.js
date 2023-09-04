import React from "react";

const Error = () => {
  return (
    <div>
      <div className="absolute  w-screen px-8 bg-black z-10 flex justify-between">
        <img
          className="w-48"
          src="./assets/images/Netflix_Logo.png"
          alt="header-logo"
        />
      </div>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="login-bgimg"
          className="bg-gradient-to-b from-black"
        />
      </div>
      <div className="absolute w-5/12 mx-auto right-0 left-0 text-white mt-36 text-center">
        <h1 className="font-bold text-7xl my-4">Lost your way?</h1>
        <p className="font-bold text-xl my-4">
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </p>
        <button className="border border-gray-400 my-4 bg-white text-black p-3 rounded-lg">
          Netflix Home
        </button>
        <p className="font-bold text-xl my-4">Error Code NSES-404</p>
      </div>
    </div>
  );
};

export default Error;
