import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={s.movieList}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link
            to={{ pathname: `/movies/${movie.id}`, state: { from: location } }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
