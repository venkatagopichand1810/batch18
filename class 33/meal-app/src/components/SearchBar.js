
function SearchBar({ onSearch, onCategorySelect, onRandomMeal }) {


    const handleSubmit = (e) => {
        e.preventDefault();
        const searchTerm = e.target.elements.search.value;
        if (searchTerm) {
            onSearch(searchTerm)
        }
    }



    return (

        <div className="flex justify-center items-center gap-20 my-4">
            <form onSubmit={handleSubmit} className="flex gap-20">
                <input
                    type="text"
                    name="search"
                    placeholder="Search for a meal"
                    className="p-2 border border-orange-500 rounded-md w-64"
                />
                <button type="submit" className="px-4 py-2 bg-orange-500 text-white rounded-md">
                    Search
                </button>
            </form>

            {/* category selection */}
            <select 
                onChange={(e) => onCategorySelect(e.target.value)}
                className="p-2 border border-orange-500 rounded-md"
            >
                <option>Select category</option>
                <option value="Seafood">Seafood</option>
                <option value="Pasta">Pasta</option>
                <option value="Vegetarian">Vegetarian</option>
            </select>

            <button onClick={onRandomMeal} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Randome Meal
            </button>

        </div>
    )

}

export default SearchBar