import { useState, useEffect } from "react";
import initialMovies from "./data/movies";
import MovieList from "./components/MovieList";
import GenreFilter from "./components/GenreFilter";
import SearchBar from "./components/SearchBar";
import AddMovieForm from "./components/AddMovieForm";

function App() {
  // 🧠 stato principale
  const [movies, setMovies] = useState(initialMovies);

  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);

  // 🎯 generi dinamici (no hardcode 🔥)
  const genres = [...new Set(movies.map((m) => m.genre))];

  // ➕ aggiunta film
  const addMovie = (newMovie) => {
    setMovies((prev) => [...prev, newMovie]);
  };

  // 🔍 filtro combinato
  useEffect(() => {
    const filtered = movies.filter((movie) => {
      const matchGenre =
        selectedGenre === "" || movie.genre === selectedGenre;

      const matchTitle =
        movie.title.toLowerCase().includes(searchTerm.toLowerCase());

      return matchGenre && matchTitle;
    });

    setFilteredMovies(filtered);
  }, [movies, selectedGenre, searchTerm]);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">🎬 Movie Filter</h1>

      <AddMovieForm genres={genres} onAddMovie={addMovie} />

      <SearchBar
        searchTerm={searchTerm}
        onChange={setSearchTerm}
      />

      <GenreFilter
        selectedGenre={selectedGenre}
        onChange={setSelectedGenre}
        genres={genres}
      />

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;