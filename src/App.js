import { React } from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import { useMovieSearch } from "./hooks/useMovieSearch";

/**
 * Main application component for FilmSphere
 * A React application for searching and displaying movie information
 *
 * @component
 * @returns {React.ReactElement} The rendered App component
 */
const App = () => {
  // Use of custom movie search hook
  const { movies, searchTerm, loading, error, searchMovies } = useMovieSearch();

  return (
    <div className="app">
      <Helmet>
        <title>FilmSphere - Movie Search App</title>
        <meta
          name="description"
          content="Search for movies and discover new films with FilmSphere"
        />
        <meta name="keywords" content="movies, film, cinema, search" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <Header onSearch={searchMovies} initialSearchTerm={searchTerm} />

      <main>
        <MoviesList movies={movies} loading={loading} error={error} />
      </main>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} FilmSphere. All rights reserved.
        </p>
        <p>Powered by OMDb API</p>
      </footer>
    </div>
  );
};

export default App;
