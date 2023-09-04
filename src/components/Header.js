import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-48"
        src="./assets/images/Netflix_Logo.png"
        alt="header-logo"
      />
      {user && (
        <div className="flex">
          <img
            className="w-10 h-10 p-1 mt-5 rounded-lg"
            src={user?.photoURL}
            alt="logout"
          />
          <button className="text-white font-bold" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
