import React, { useRef, useState } from "react";
import lang from "../constant/langConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { MY_API_KEY } from "../constant/Constant";
import { addGPTMoviesResult } from "../redux/gptMovies";
import ShimmerUI from "../utils/ShimmerUI";

const GptSearchBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.language.lang);
  const getInputValue = useRef(null);
  // Fetch Movie list from TMDB API

  // useEffect(() => {
  const serachMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${MY_API_KEY}`
    );
    const json = await data.json();
    return json.results;
  };
  // }, []);

  const handleGptSearchClick = async () => {
    setIsLoading(true);
    console.log("Your serach result ==> ", getInputValue.current.value);

    // make an API call to GPT API and get the movies result :
    const gptQuery =
      "Act as a movie Recommendations system and suggest some movies for the query:" +
      getInputValue.current.value +
      ". Only give me name of only 10 movies, comma seperated like the example results given ahead. Example : Sholay,Shabnam,Golmal,Gadar,OMG2 ";
    // console.log(gptQuery);

    const gptSearchResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptSearchResult.choices) {
      // TODO : Error handling here
    }
    const gptResult = gptSearchResult.choices[0]?.message?.content.split(",");
    // convert into the array your content like Hera Pherri,Jan => ["Hera Pherri","Jan"]
    console.log(gptResult);

    const promiseArray = gptResult.map((movie) => serachMovieTMDB(movie));
    const tmdbResult = await Promise.all(promiseArray);
    console.log("tmdbResult: ", tmdbResult);
    dispatch(
      addGPTMoviesResult({
        gptResultName: gptResult,
        tmdbMovieResult: tmdbResult,
      })
    );
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      <div className="pt-[10%] flex justify-center">
        <form className="w-[70%]" onSubmit={(e) => e.preventDefault()}>
          <h1 className="font-bold text-4xl text-white py-4">
            {lang[langKey].headingTitle}
          </h1>
          <input
            ref={getInputValue}
            type="text"
            className="p-2 w-[70%] ml-12 bg-gray-50 rounded-lg"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button
            className="p-2 font-bold px-6 m-2 bg-red-600 text-white rounded-lg"
            onClick={handleGptSearchClick}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : lang[langKey].search}
          </button>
          {/* {isLoading && <div className="text-white bg-black p-4 m-2 text-center text-3xl font-bold">Loading spinner or animation here</div>} */}
        </form>
      </div>
      {isLoading && <ShimmerUI />}
    </>
  );
};

export default GptSearchBar;
