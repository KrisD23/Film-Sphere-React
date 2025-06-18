import PropTypes from "prop-types";
import MovieCard from "./MovieCard";

const MoviesList = ({ movies, loading, error }) => {
  if (loading) {
    return (
      <div className="loading" role="status" aria-live="polite">
        <div className="spinner"></div>
        <h2>Loading movies...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error" role="alert">
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (!movies.length) {
    return (
      <div className="empty" role="status">
        <h2>No movies found</h2>
        <p>Try another search term</p>
      </div>
    );
  }

  return (
    <section className="movies-container">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID || `movie-${movie.Title}-${movie.Year}`}
          movie={movie}
        />
      ))}
    </section>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbID: PropTypes.string,
      Title: PropTypes.string.isRequired,
      Year: PropTypes.string,
      Poster: PropTypes.string,
      Type: PropTypes.string,
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default MoviesList;
