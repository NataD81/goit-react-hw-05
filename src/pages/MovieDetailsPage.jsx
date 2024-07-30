import { useEffect, useState, Suspense, lazy } from "react";
import {
  useParams,
  useLocation,
  useNavigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import { fetchMovieDetails } from "../api";

const MovieCast = lazy(() => import("../components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("../components/MovieReviews/MovieReviews")
);

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (movieId) {
      fetchMovieDetails(movieId).then(setMovie);
    }
  }, [movieId]);

  const handleGoBack = () => {
    navigate(location?.state?.from ?? "/movies");
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
        <NavLink
          to={`cast`}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Cast
        </NavLink>
        <NavLink
          to={`reviews`}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Reviews
        </NavLink>
      </nav>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="cast" element={<MovieCast movieId={movieId} />} />
          <Route path="reviews" element={<MovieReviews movieId={movieId} />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
