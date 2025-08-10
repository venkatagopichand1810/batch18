import { useState } from "react"

function SearchBar({onSearch}) {
    // state varibale for the search Term
    const[searchTerm, setSearchTerm] = useState('');


    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm)
    }

    return (
        <form onSubmit={handleSearch}>
            <input 
            type="text"
            placeholder="Search your movie...."
            className="border text-black w-60 px-4 py-2"
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="text-white px-4 py-2 text-center bg-orange-500">
            Search
        </button>
        </form>
    )

}

export default SearchBar