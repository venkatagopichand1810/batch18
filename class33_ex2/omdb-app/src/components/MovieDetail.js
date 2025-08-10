
import { MovieDetails } from "../api"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function MovieDetail({favourite, addToFavourite}) {

    const {id} = useParams();

    // create the state variables 
    const[movie, setMovie] = useState(null); //to store the fetched  moviedetials data
    const[error, setError] = useState(null);

    // fetch the movieDetails from the api

    useEffect(() => {
        const MovieDetail = async() => {
            try {
                const data = await MovieDetails(id);
                setMovie(data)
            } catch(error){
                setError("failed to fetch the movies")
            }
        }
        MovieDetail();
    }, [id])

    // condition if data is loading

    if(!movie){
        return <h1>Data is loading please wait</h1>
    }

    // condition if any error
    if(error){
        return <h1>Error from the server</h1>
    }

    return (
        <div className="flex p-4">
            <img src={movie.Poster} alt= {movie.Title} className="mr-8"/>
            <div className="mt-4 ms-4">
                <h1><strong>Title:</strong> {movie.Title}</h1>
                <h2><strong>Writer:</strong> {movie.Writer}</h2>
                <h3><strong>ImdbRating:</strong> {movie.imdbRating}</h3>
                <mark>Description:</mark><p>{movie.Plot}</p>
                
            </div>
        </div>
    )



}

export default MovieDetail