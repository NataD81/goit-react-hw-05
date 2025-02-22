import { useEffect, useState, Suspense, useRef } from "react";
import {
  useParams,
  useLocation,
  useNavigate,
  NavLink,
  Outlet,
} from "react-router-dom";
import { fetchMovieDetails } from "../api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const prevLocation = useRef(location.state?.from);

  useEffect(() => {
    if (movieId) {
      fetchMovieDetails(movieId).then(setMovie);
    }
  }, [movieId]);

  const handleGoBack = () => {
    navigate(prevLocation.current ?? "/movies");
  };

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <button onClick={handleGoBack}>Go back</button>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <nav>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
