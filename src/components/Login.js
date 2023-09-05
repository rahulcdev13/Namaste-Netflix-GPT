import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/FormValidatation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/FirebaseConfig";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { login_bgimage_page, user_avatar } from "../constant/Constant";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: user_avatar,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={login_bgimage_page} alt="login-bgimg" />
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute w-3/12 text-white p-12 bg-black mt-32 mx-auto right-0 left-0 rounded-xl bg-opacity-80"
        >
          <h1 className="text-3xl font-bold py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {isSignInForm ? (
            ""
          ) : (
            <input
              ref={name}
              type="text"
              placeholder="Enter Your Fullname"
              autoComplete="off"
              className="p-3 my-4 w-full bg-gray-700 rounded-lg"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            autoComplete="off"
            className="p-3 my-4 w-full bg-gray-700 rounded-lg"
          />
          <input
            ref={password}
            type="password"
            autoComplete="off"
            placeholder="Password"
            className="p-3 my-4 w-full bg-gray-700 rounded-lg"
          />
          <p className="text-red-900 m-2">{errorMessage}</p>
          <button
            className="p-3 font-bold my-6 bg-red-800 w-full rounded-lg"
            onClick={handleButtonClick}
          >
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
