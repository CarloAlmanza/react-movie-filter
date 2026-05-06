function MovieItem({ movie }) {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span>{movie.title}</span>
            <span className="badge bg-primary">{movie.genre}</span>
        </li>
    );
}

export default MovieItem;