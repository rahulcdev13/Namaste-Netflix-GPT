import React from "react";
import lang from "../constant/langConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.language.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-[70%]" onSubmit={(e) => e.preventDefault()}>
        {/* <h1 className="font-bold text-5xl text-white py-4">
          Unlimited movies, TV shows and more
        </h1> */}
        <input
          type="text"
          className="p-2 w-[70%] ml-12 bg-gray-50 rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="p-2 font-bold px-6 m-2 bg-red-600 text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
