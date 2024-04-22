import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const Maincontainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  //if (movies === null) return;
  if (!movies) return;

  const mainMovie = movies[0];


  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative overflow-hidden">
      <VideoBackground movieId={id}/>
      <VideoTitle title={original_title} overview={overview} />
      
    </div>
  );
};

export default Maincontainer;
