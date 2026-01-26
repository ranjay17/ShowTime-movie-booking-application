import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import useFetchMovie from "../hooks/useFetchMovie";
import MovieCard from "./MovieCard";
const Browse = () => {
  useFetchMovie();
  const movies = useSelector((store) => store.movie);
  return (
    <>
      <Header />
      <div className="m-4 bg-black text-white cursor-pointer">
        <h1 className="text-xl font-semibold text-center mb-4 text-white">
          🎬 Now Playing Movies
        </h1>
        <div className=" mt-4 grid grid-cols-6 justify-items-center">
          {movies &&
            movies.map((movie) => {
              return (
                <div key={movie.id}>
                  <MovieCard
                    id={movie.id}
                    title={movie.title}
                    posterPath={movie.poster_path}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Browse;
