function SearchBar({ searchTerm, onChange }) {
    return (
        <div className="mb-3">
            <label className="form-label">Cerca per titolo</label>
            <input
                type="text"
                className="form-control"
                placeholder="Es. Inception..."
                value={searchTerm}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;