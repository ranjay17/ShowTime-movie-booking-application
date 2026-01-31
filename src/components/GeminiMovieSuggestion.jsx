import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GeminiMovieSuggestion = () => {
  const {movieNames ,movieResults } = useSelector((store) => store.gemini);
  if (!movieResults || !movieNames) return null;
  return (
    <div className="bg-gray-300 p-4">
      <div className="flex justify-center gap-7 rounded-lg shadow-lg">
        {movieNames.map((movie, index) => {
          return (
            <MovieCard
              key={movie}
              title={movie}
              posterPath={movieResults[index][0].poster_path}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GeminiMovieSuggestion;
