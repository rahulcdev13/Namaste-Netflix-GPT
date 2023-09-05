import React, { useRef } from "react";
import lang from "../constant/langConstant";
import { useSelector } from "react-redux";
import openai from "../utils/openai";
import { current } from "@reduxjs/toolkit";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.language.lang);
  const getInputValue = useRef(null);

  const handleGptSearchClick = async () => {
    console.log(getInputValue.current.value);
    // make an API call to GPT API and get the movies result :
    const gptQuery =
      "Act as a movie Recommendations system and suggest some movies for the query:" +
      getInputValue.current.value +
      ". Only give me name of only five movies, comma seperated like the example results given ahead. Example : Sholay,Shabnam,Golmal,Gadar,OMG2 ";

    const gptSearchResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(gptSearchResult.choices);
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-[70%]" onSubmit={(e) => e.preventDefault()}>
        {/* <h1 className="font-bold text-5xl text-white py-4">
          Unlimited movies, TV shows and more
        </h1> */}
        <input
          ref={getInputValue}
          type="text"
          className="p-2 w-[70%] ml-12 bg-gray-50 rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="p-2 font-bold px-6 m-2 bg-red-600 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
