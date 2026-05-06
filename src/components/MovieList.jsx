import MovieItem from "./MovieItem";

function MovieList({ movies }) {
    if (movies.length === 0) {
        return <p>Nessun film trovato</p>;
    }

    return (
        <ul className="list-group">
            {movies.map((movie, index) => (
                <MovieItem key={index} movie={movie} />
            ))}
        </ul>
    );
}

export default MovieList;