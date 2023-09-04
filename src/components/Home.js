import React, { useEffect } from "react";
import Login from "./Login";
import Browser from "./Browser";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/FirebaseConfig";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import Error from "./Error";

const Home = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  });

  return (
    <div>
      <RouterProvider router={appRouter}>
        {/* <Login />
        <Browser /> */}
      </RouterProvider>
    </div>
  );
};

export default Home;
