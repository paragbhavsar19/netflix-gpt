import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <>
      <div className="py-6 pl-14">
        <h1 className="text-3xl font-medium mb-5 pb-2  text-white">
          {title}
        </h1>
        <div className="movielist flex overflow-x-auto">
          <div className="movie-card flex space-x-6">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
