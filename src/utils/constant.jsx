export const LOGO_URL =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Showtime.svg/1280px-Showtime.svg.png";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_TMDB_KEY,
  },
};

export const NOW_PLAYING_MOVIES =
    "https://api.themoviedb.org/3/movie/now_playing";

export const MOVIE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export const Api_key = import.meta.env.VITE_API_KEY;

