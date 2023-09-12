import React from "react";
import MovieCards from "./MovieCards";
// import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  //console.log(movies);

  return (
    <div className="w-screen">
      <h1 className="py-4 font-bold text-white text-2xl">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
          //  <Link to="/movieDetails" key={movie.id}>
           <MovieCards key={movie.id} posterPath={movie.poster_path} />
          //  </Link> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
