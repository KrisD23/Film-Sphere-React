import PropTypes from "prop-types";
import { PLACEHOLDER_IMAGE_URL } from "../constants";

const MovieCard = ({ movie }) => {
  const { Year, Poster, Type, Title } = movie;

  return (
    <article className="movie" tabIndex="0">
      <div className="movie-year">
        <p>{Year}</p>
      </div>
      <div className="movie-poster">
        <img
          src={Poster !== "N/A" ? Poster : PLACEHOLDER_IMAGE_URL}
          alt={`${Title} poster`}
          loading="lazy"
        />
      </div>
      <div className="movie-info">
        <span className="movie-type">{Type}</span>
        <h3>{Title}</h3>
      </div>
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Year: PropTypes.string,
    Poster: PropTypes.string,
    Type: PropTypes.string,
    Title: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
