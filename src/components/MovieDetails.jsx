import React, { useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { options } from "../utils/constant";
import {
  addMovieDetail,
  addMovieTrailer,
  setShowTrailer,
} from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import TrailerModal from "./TrailerModal";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const movieDetail = useSelector((store) => store.movie.movieDetails);
  const showTrailer = useSelector((store) => store.movie.showTrailer);
  const { id } = useParams();
  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          options,
        );
        dispatch(addMovieDetail(response.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieDetail();
  }, []);

  const handleTrailerPlay = async() =>{
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieDetail.id}/videos`,
        options
      );
      const trailer = response.data.results.find(
        (video) => video.type == "Trailer"
      );
      dispatch(addMovieTrailer(trailer))
      dispatch(setShowTrailer(true))
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-200 text-white p-6">
        {!movieDetail ? (
          <p className="text-center text-gray-400">Loading movie details...</p>
        ) : (
          <div className="max-w-3xl mx-auto bg-zinc-900 rounded-lg ">
            <div className="relative">
              <img
                src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
                alt={movieDetail.title}
                className="w-full h-80 object-cover"
              />
              {showTrailer && <TrailerModal id={id} />}
              <div className="absolute bottom-4 left-4 flex gap-3">
                <button
                  className="bg-white text-black px-4 py-2 text-sm font-semibold rounded"
                  onClick={handleTrailerPlay}
                >
                  ▶ Play Trailer
                </button>
                <Link to={`/booking/${id}`}>
                  <button className="bg-red-600 px-4 py-2 text-sm font-semibold rounded">
                    🎟 Book Ticket
                  </button>
                </Link>
              </div>
            </div>
            <div className="p-6">
              <h1 className="text-2xl font-semibold mb-3">
                {movieDetail.title}
              </h1>

              <div className="flex gap-6 text-sm text-gray-300 mb-4">
                <p>
                  <span className="font-medium">Length:</span>{" "}
                  {movieDetail.runtime} min
                </p>
                <p>
                  <span className="font-medium">Adult:</span>{" "}
                  {movieDetail.adult ? "Yes" : "No"}
                </p>
              </div>

              <p className="text-gray-200 leading-relaxed">
                {movieDetail.overview}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MovieDetails;
