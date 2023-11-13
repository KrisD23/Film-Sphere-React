import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
// ba5fb318

const API_URL = "http://www.omdbapi.com?apikey=ba5fb318";

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
      <h1>FilmSphere</h1>

      <div className="search">
        <input placeholder="Movie titile" value="Batman" onChange={() => {}} />
      </div>
    </div>
  );
}

export default App;
