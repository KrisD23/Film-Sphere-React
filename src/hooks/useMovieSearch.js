import { useState, useCallback, useEffect } from "react";
import { searchMovies } from "../services/movieService";
import { DEFAULT_SEARCH_TERM } from "../constants";

export const useMovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = useCallback(async (title) => {
    if (!title.trim()) return;

    setLoading(true);
    setError(null);

    const { movies: fetchedMovies, error: fetchError } = await searchMovies(
      title
    );

    if (fetchError) {
      setError(fetchError);
    }

    setMovies(fetchedMovies);
    setLoading(false);
  }, []);

  // Initial search when component mounts
  useEffect(() => {
    fetchMovies(DEFAULT_SEARCH_TERM);
  }, [fetchMovies]);

  return {
    movies,
    searchTerm,
    setSearchTerm,
    loading,
    error,
    searchMovies: fetchMovies,
  };
};
