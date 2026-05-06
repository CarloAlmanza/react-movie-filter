import { useState, useEffect } from "react";
import moviesData from "./data/movies";
import MovieList from "./components/MovieList";
import GenreFilter from "./components/GenreFilter";

function App() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(moviesData);

  useEffect(() => {
    if (selectedGenre === "") {
      setFilteredMovies(moviesData);
    } else {
      const filtered = moviesData.filter(
        (movie) => movie.genre === selectedGenre
      );
      setFilteredMovies(filtered);
    }
  }, [selectedGenre]);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">🎬 Movie Filter</h1>

      <GenreFilter
        selectedGenre={selectedGenre}
        onChange={setSelectedGenre}
      />

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;