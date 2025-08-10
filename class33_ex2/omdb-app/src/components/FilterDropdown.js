
function FilterDropdown({ onFilterChange }) {

    return (
        <select onChange={(e) => onFilterChange(e.target.value)} className="text-black bg-gray-200 text-xl rounded-lg p-2">
            <option value="">All</option>
            <option value="movie">Movies</option>
            <option value="series">Series</option>
        </select>
    )

}

export default FilterDropdown