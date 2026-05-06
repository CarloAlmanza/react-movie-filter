import { useState, useEffect } from "react";
import moviesData from "./data/movies";
import MovieList from "./components/MovieList";
import GenreFilter from "./components/GenreFilter";
import SearchBar from "./components/SearchBar";

function App() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(moviesData);

  useEffect(() => {
    const filtered = moviesData.filter((movie) => {
      const matchGenre =
        selectedGenre === "" || movie.genre === selectedGenre;

      const matchTitle =
        movie.title.toLowerCase().includes(searchTerm.toLowerCase());

      return matchGenre && matchTitle;
    });

    setFilteredMovies(filtered);
  }, [selectedGenre, searchTerm]);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">🎬 Movie Filter</h1>

      <SearchBar
        searchTerm={searchTerm}
        onChange={setSearchTerm}
      />

      <GenreFilter
        selectedGenre={selectedGenre}
        onChange={setSelectedGenre}
      />

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;