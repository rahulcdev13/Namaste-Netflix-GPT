import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
  //console.log(movies);

  return (
    <div className="px-6">
      <h1 className="py-4 font-bold text-white text-2xl">{title}</h1>
      <div className="flex overflow-x-scroll bg-black">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCards key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
