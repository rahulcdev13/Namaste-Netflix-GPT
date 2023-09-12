import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import Error from "./Error";
import MovieDetails from "./MovieDetails";

const Home = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "*",
      element: <Error />,
    },
    {
      path: "/movieDetails",
      element: <MovieDetails />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Home;
