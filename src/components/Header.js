import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/FirebaseConfig";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { SUPPORTED_LANGUAGES, netflix_logo } from "../constant/Constant";
import { toggleGptSearchView } from "../redux/gptSlice";
import { changeLanguage } from "../redux/languageSlice";
import {FaSignOutAlt} from "react-icons/fa"

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showLang = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // User is signed In
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/Browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };
  const handleChnageLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <div className="flex">
      <img className="w-48"  src={netflix_logo} alt="header-logo" />
      {user && <ul className="flex text-white mt-7">
        <li className="px-2 text-white">Home</li>
        <li className="px-2 text-gray-300 hover:text-white">TV Shows</li>
        <li className="px-2 text-gray-300 hover:text-white">Movies</li>
        <li className="px-2 text-gray-300 hover:text-white">News & Popular</li>
        <li className="px-2 text-gray-300 hover:text-white">My List</li>
        <li className="px-2 text-gray-300 hover:text-white">Browser My Languages</li>
      </ul>}        
      </div>

      {user && (
        <div className="flex">
          {showLang && (
            <select
              onChange={handleChnageLanguage}
              className="my-6 m-2 px-4 rounded-md text-gray bg-gray-50"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleGptSearch}
            className="my-6 px-4 rounded-md text-white bg-red-600"
          >
            {showLang ? "HOME" : "GPT SEARCH"}
          </button>
          <img
            className="w-10 h-10 p-1 mt-5 rounded-lg"
            src={user?.photoURL}
            alt="logout"
          />
          <button className="text-white text-4xl font-bold" onClick={handleSignOut}>
            <FaSignOutAlt />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
