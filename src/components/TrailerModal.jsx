import { useDispatch, useSelector } from "react-redux";
import { setShowTrailer } from "../utils/movieSlice";
import { Link } from "react-router-dom";

const TrailerModal = ({id}) => {
  const trailer = useSelector((store) => store.movie.movieTrailer);
  const dispatch = useDispatch();

  if (!trailer) return null;
  const handleBack = () =>{
    dispatch(setShowTrailer(false))
  }

  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 bg-black flex items-center justify-center z-50">
      <div className="w-full h-75 ">
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${trailer.key}`}
          title="Movie Trailer"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
      <div className="m-10 p-4">
        <Link to={`/movie/${id}`}>
          <button onClick={handleBack} className="bg-red-600 text-white rounded-lg p-6">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrailerModal;
