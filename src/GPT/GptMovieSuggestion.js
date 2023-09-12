import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

const GptMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gptmovie);
  const { gptResultName, tmdbMovieResult } = gpt;
  if (!gptResultName) return null;
  // console.log("results :", gpt);
  
  return (
    <div className="p-2 mt-12 bg-black text-white bg-opacity-90">
      <div>
        {gptResultName.map((movieName,index) => (
         <MovieList
            key={movieName}
            title={movieName}
            movies={tmdbMovieResult[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
