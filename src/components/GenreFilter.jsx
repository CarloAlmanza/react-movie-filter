function GenreFilter({ selectedGenre, onChange, genres }) {
    return (
        <div className="mb-3">
            <label className="form-label">Filtra per genere</label>
            <select
                className="form-select"
                value={selectedGenre}
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="">Tutti</option>
                {genres.map((g, index) => (
                    <option key={index} value={g}>
                        {g}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default GenreFilter;