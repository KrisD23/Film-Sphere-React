import axios from "axios";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
if (!API_KEY) {
  console.error(
    "REACT_APP_OMDB_API_KEY is not defined in environment variables"
  );
}

const apiClient = axios.create({
  baseURL: "https://www.omdbapi.com",
  params: {
    apikey: API_KEY,
  },
});

export const searchMovies = async (searchTerm) => {
  try {
    const response = await apiClient.get("", {
      params: {
        s: searchTerm,
      },
    });

    if (response.data.Response === "False") {
      return { movies: [], error: response.data.Error };
    }

    return { movies: response.data.Search || [], error: null };
  } catch (error) {
    console.error("Error fetching movies:", error);
    return {
      movies: [],
      error: "Failed to fetch movies. Please try again later.",
    };
  }
};

const movieService = { searchMovies };
export default movieService;
