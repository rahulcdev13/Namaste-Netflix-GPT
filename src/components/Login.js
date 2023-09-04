import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="login-bgimg"
        />
      </div>
      <div>
        <form className="absolute w-3/12 text-white p-12 bg-black mt-32 mx-auto right-0 left-0 rounded-xl bg-opacity-80">
          <h1 className="text-3xl font-bold py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {isSignInForm ? '' : (<input
            type="text"
            placeholder="Enter Your Fullname"
            autoComplete="off"
            className="p-3 my-4 w-full bg-gray-700 rounded-lg"
          />)}
          <input
            type="text"
            placeholder="Email Address"
            autoComplete="off"
            className="p-3 my-4 w-full bg-gray-700 rounded-lg"
          />
          <input
            type="password"
            autoComplete="off"
            placeholder="Password"
            className="p-3 my-4 w-full bg-gray-700 rounded-lg"
          />
          <button className="p-3 font-bold my-6 bg-red-800 w-full rounded-lg">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          {isSignInForm ? (
            <p className="py-4 text-white">
              New to Netflix?{" "}
              <span onClick={toggleSignIn} className="font-bold cursor-pointer">
                Sign up now.
              </span>
            </p>
          ) : (
            <p className="py-4 text-white">
              You have already Sign Up?{" "}
              <span onClick={toggleSignIn} className="font-bold cursor-pointer">
                Sign In Now.
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
