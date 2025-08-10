
import { Link } from "react-router-dom"

function MovieList({movies}) {

    //if movie is not found
    if(movies.length === 0){
        return <h1 className="text-center font-bold text-red-700 uppercase text-2xl">Serach movie is not found please try again</h1>
    }

    return (
        <div className="flex flex-wrap gap-10">
            {movies.map(movie => (
                <Link key={movie.imdbID} to={`/movie/${movie.imdbID}`}>
                <div className="mb-8 w-80 overflow-hidden text-center transform transition duration-500 hover:scale-90 rounded-md ">
                    <img src = {movie.Poster} alt={movie.Title} className="w-full h-96"/>
                    <div className="bg-slate-400 py-4">
                        <h1 className="text-2xl">{movie.Title}</h1>
                        <h2 className="text-2xl">{movie.Year}</h2>
                        <p className="text-xl">{movie.Type}</p>
                    </div>
                </div>
                </Link>
            ))}
        </div>
    )

}

export default MovieList