import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
// ba5fb318

const API_URL = "http://www.omdbapi.com?apikey=ba5fb318";
const movie1 = {
  Title: "Batman Begins",
  Year: "2005",
  imdbID: "tt0372784",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
};

// App componet
function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };
  useEffect(() => {
    searchMovies("batman");
  }, []);

  return (
    <div className="app">
      {/* Site name */}
      <h1>FilmSphere</h1>

      {/* Search input */}
      <div className="search">
        <input placeholder="Movie titile" value="Batman" onChange={() => {}} />
        <img src={SearchIcon} alt="Search" onClick={() => {}} />
      </div>

      <div className="container">
        <MovieCard movie1={movie1} />
      </div>
    </div>
  );
}

export default App;
