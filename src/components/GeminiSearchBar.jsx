import React, { useRef } from "react";
import geminiAi from "../utils/gemini";
import { options } from "../utils/constant";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addGeminiMovie } from "../utils/geminiSlice";

const GeminiSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // search movie
  const searchMovies = async (movie) => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options,
    );
    return res.data.results;
  };

  const handleGptSearch = async () => {
    const query = searchText.current.value;

    try {
      const response = await geminiAi.models.generateContent({
        model: "gemini-2.5-flash-lite",
        contents:
          "Act as a Movie Recommendation system and suggest some movies for the query: " +
          query +
          ". Only give me names of 5 movies, comma separated. Example: Raaz, Gadar, Welcome, Singham, Koi Mil Gaya.",
      });

      const text = response.candidates[0].content.parts[0].text;
      const movieList = text.split(",");
      // for each movie search to tmdb
      const promiseArr = movieList.map((movie) => searchMovies(movie));
      const tmdbResults = await Promise.all(promiseArr);
      dispatch(
        addGeminiMovie({ movieNames: movieList, movieResults: tmdbResults }),
      );
      searchText.current.value = "";
    } catch (error) {
      console.error("Gemini Error:", error);
    }
  };

  return (
    <div className="bg-white flex justify-center">
      <form
        className="rounded shadow-lg flex m-8 gap-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          placeholder="Need Movie Suggestions?"
          className="px-4 border border-black bg-gray-300"
        />
        <button
          className="bg-red-700 px-6 py-1 text-white"
          onClick={handleGptSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GeminiSearchBar;
