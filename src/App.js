import { useEffect } from "react";

// ba5fb318

const API_URL = "http://www.omdbapi.com?apikey=ba5fb318";

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
  };
  useEffect(() => {
    searchMovies("batman");
  }, []);
  return (
    <div>
      <h1>APP</h1>
    </div>
  );
}

export default App;
