import { useState } from "react";

function AddMovieForm({ genres, onAddMovie }) {
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !genre) return;

        onAddMovie({
            title,
            genre,
        });

        // reset form
        setTitle("");
        setGenre("");
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <h4>Aggiungi Film</h4>

            <div className="mb-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Titolo film"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="mb-2">
                <select
                    className="form-select"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                >
                    <option value="">Seleziona genere</option>
                    {genres.map((g, index) => (
                        <option key={index} value={g}>
                            {g}
                        </option>
                    ))}
                </select>
            </div>

            <button className="btn btn-success">Aggiungi</button>
        </form>
    );
}

export default AddMovieForm;