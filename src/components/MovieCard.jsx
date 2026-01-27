import { Link } from "react-router-dom";
import { MOVIE_IMAGE_URL } from "../utils/constant";

const MovieCard = ({ title, posterPath, id }) => {
  return (
    <Link to={`/movie/${id}`}>
      <div className="w-36 rounded-lg shadow-sm hover:shadow-lg bg-red-600">
        <img
          src={`${MOVIE_IMAGE_URL}${posterPath}`}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <h3 className="text-sm font-medium text-center mt-1 px-1 h-10 overflow-hidden">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default MovieCard;

