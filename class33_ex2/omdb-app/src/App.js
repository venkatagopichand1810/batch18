import { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import FilterDropdown from "./components/FilterDropdown";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import { SearchMovie } from "./api";
import Favourite from "./components/Favourite";



function App() {
  // create the state variables
  const [movies, setMovies] = useState([]); //store the movies fetched from the api
  const [error, setError] = useState(null); //error messages during the api failure 
  const [loading, setLoading] = useState(true); //if data is still being loaded
  const [filter, setFilter] = useState(''); //filter to the movie list
  const [favourite, setFavourite] = useState([]); //filter for the favourite movies
  const [currentPage, setCurrentPage] = useState(1); //curent page movies being displayed
  const moviesPerPage = 4; //define how many movies to display per page


  // handleSearch function: creating the handlesearch function to fetch movie data and update the movies state
  //useCallback handleseach to avoid the uncessart re-renders

  const handleSearch = useCallback(async (searchTerm) => {
    try {
      const data = await SearchMovie(searchTerm, filter);
      setMovies(data.Search || [])

    } catch (error) {
      setError(error.message)

    } finally {
      setLoading(false)
    }
  }, [filter]);

  useEffect(() => {
    const loadDefaultMovies = async () => {
      await handleSearch("movies")
    }
    loadDefaultMovies();
  }, [handleSearch])



  // filter the movies
  const handleFilterChange = (filter) => {
    setFilter(filter)
  }

  // update the current page state
  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber)
  }


  //calculate the current movies to display
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie); //what movies should show on the current page


  //diplay the total page
  const totalPages = Math.ceil(movies.length / moviesPerPage);


  // show all the page numbers for the pagination button

  const paginationNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationNumbers.push(i)
  }


  //add to favourite

  const addToFavourite = (movie) => {
    if (favourite.find(fav => fav.imdbID === movie.imdbID)) {
      alert("Movie is already added to the favourite");
      return
    }
    else {
      setFavourite([...favourite, movie])
    }
  }


  //to remove the movie form the favourite
  const removeFromFavourite = (movieimdbID) => {
    setFavourite(favourite.filter(fav => fav.imdbID !== movieimdbID))
  }


  // condition if data is loading
  if (loading) {
    return <h1 className="text-2xl font-bold text-green-600">Data is loading please wait</h1>
  }


  // condition if error
  if (error) {
    return <h1 className="text-2xl font-bold text-red-600">Error</h1>
  }

  return (
    <Router>

      <header className="sticky top-0 bg-gray-400 text-white items-center flex flex-wrap gap-5 justify-between p-5 mb-10 z-50">
        <h1 className="text-4xl font-extrabold">Guvi Movies</h1>
        <SearchBar onSearch={handleSearch} />
        <div className="flex flex-wrap gap-5 justify-between">
          <FilterDropdown onFilterChange={handleFilterChange} />
          {/* add fav link */}
          <Link to="/favourite" className="text-white">
            <button className="text-white bg-gray-500 font-medium rounded-md text-center text-xl px-4 py-2 cursor-pointer">
              Favourite
            </button>
          </Link>
        </div>
      </header>

      <main>
        <div className="mx-10">
          <Routes>
            <Route path="/" element={
              <>
                <MovieList movies={currentMovies} />

                {/* pagination */}
                <div>
                  {paginationNumbers.map((pageNumber) => (
                    <button key={pageNumber}
                      onClick={() => handlePagination(pageNumber)}
                      className={`py-2 px-3 rounded my-4 ${currentPage === pageNumber ? "bg-blue-400" : "bg-gray-200"}`}
                    >
                      {pageNumber}
                    </button>

                  ))}
                </div>
              </>
            } />

            <Route path="/favourite" element={<Favourite favourite={favourite} removeFromFavourite={removeFromFavourite} />} />
            <Route path="/movie/:id" element={<MovieDetail favourite={favourite} addToFavourite={addToFavourite} />} />
          </Routes>
        </div>
      </main>



    </Router>

  )

}

export default App