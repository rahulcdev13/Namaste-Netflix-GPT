import React from "react";
import { MOVIE_CARD_IMG_URL } from "../constant/Constant";

const MovieCards = ({ posterPath }) => {
  return (
    <div className="w-52 pr-4">
      <img className="rounded-md" src={MOVIE_CARD_IMG_URL + posterPath} alt="movieCardimg" />
    </div>
  );
};

export default MovieCards;
