import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = () => {
  return (
    <div className=" gptsearch h-screen">
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch; 
