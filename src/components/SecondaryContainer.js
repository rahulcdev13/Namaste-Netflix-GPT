import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && movies.nowPopularMovies && (
      <div className="bg-black">
        <div className="-mt-64 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList
            title={"Populer on Netflix"}
            movies={movies.nowPopularMovies}
          />
          <MovieList
            title={"Top Rated Movie"}
            movies={movies.nowTopRatedMovies}
          />
          <MovieList
            title={"Upcomming Movie"}
            movies={movies.nowUpcommingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
