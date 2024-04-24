import React from "react";
import lang from "../utils/language";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);

  return (
    <div className="w-2/5 mx-auto">
      <div className="pt-32 relative">
        <form className="  flex items-center relative">
          <input
            type="text"
            className="py-2 pl-2 pr-28 border w-full outline-none"
            placeholder={lang[langkey].gptsearchPlaceholder}
          />
          <button className="py-2 px-6 bg-black text-white text-xl  font-medium absolute right-0">
            {lang[langkey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
