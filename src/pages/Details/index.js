import { useParams } from "react-router"
import { useState, useEffect } from "react"
import { APIKey } from '../../config/key'
import { Container } from "./styles"

function Details() {

    const { id } = useParams()

    const [movie, setMovie] = useState({})
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US`)
            .then(response => response.json())
            .then(data => {

                const { title, overview, poster_path, release_date } = data

                const movie = {
                    id,
                    title,
                    sinopse: overview,
                    image: `${image_path}${poster_path}`,
                    releaseDate: release_date
                }

                console.log(movie)
                setMovie(movie)
            })
    }, [id])

    return (
        <Container>
            <div className="movie">
                <img src={movie.image} alt={movie.sinopse} />
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span>Sinopse: {movie.sinopse} </span>
                    <span className="release-date">Release: {movie.releaseDate} </span>
                    <button> Go Back </button>
                </div>
            </div>
        </Container>
    )
}

export default Details