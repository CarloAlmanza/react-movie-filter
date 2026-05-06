import { useState } from "react";

function AddMovieForm({ genres, onAddMovie, existingMovies }) {
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        const trimmedTitle = title.trim();

        // titolo obbligatorio
        if (!trimmedTitle) {
            newErrors.title = "Il titolo è obbligatorio";
        } else if (trimmedTitle.length < 2) {
            newErrors.title = "Minimo 2 caratteri";
        }

        // duplicati (case insensitive)
        const alreadyExists = existingMovies.some(
            (m) => m.title.toLowerCase() === trimmedTitle.toLowerCase()
        );

        if (alreadyExists) {
            newErrors.title = "Film già presente";
        }

        // genere obbligatorio
        if (!genre) {
            newErrors.genre = "Seleziona un genere";
        }

        // sicurezza extra
        if (genre && !genres.includes(genre)) {
            newErrors.genre = "Genere non valido";
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        onAddMovie({
            title: title.trim(),
            genre,
        });

        // reset
        setTitle("");
        setGenre("");
        setErrors({});
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <h4>Aggiungi Film</h4>

            {/* TITLE */}
            <div className="mb-2">
                <input
                    type="text"
                    className={`form-control ${errors.title ? "is-invalid" : ""}`}
                    placeholder="Titolo film"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                {errors.title && (
                    <div className="invalid-feedback">{errors.title}</div>
                )}
            </div>

            {/* GENRE */}
            <div className="mb-2">
                <select
                    className={`form-select ${errors.genre ? "is-invalid" : ""}`}
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
                {errors.genre && (
                    <div className="invalid-feedback">{errors.genre}</div>
                )}
            </div>

            <button className="btn btn-success">Aggiungi</button>
        </form>
    );
}

export default AddMovieForm;