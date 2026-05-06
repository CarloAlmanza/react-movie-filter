function GenreFilter({ selectedGenre, onChange }) {
    return (
        <div className="mb-3">
            <label className="form-label">Filtra per genere</label>
            <select
                className="form-select"
                value={selectedGenre}
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="">Tutti</option>
                <option value="Fantascienza">Fantascienza</option>
                <option value="Thriller">Thriller</option>
                <option value="Romantico">Romantico</option>
                <option value="Azione">Azione</option>
            </select>
        </div>
    );
}

export default GenreFilter;