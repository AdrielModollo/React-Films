import { useParams } from "react-router"
import { useState, useEffect } from "react"
import { APIKey } from '../../config/key'

function Details() {

    const { id } = useParams()

    const { movie, setMovies } = useState({})

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US`)
            .then(response => response.json())
            .then(data => {

                const { title, overview, backdrop_path, release_date } = data

                const movie = {
                    id,
                    title,
                    sinopse: overview,
                    image: backdrop_path,
                    releaseDate: release_date
                }

                console.log(movie)
                setMovies(movie)
            })
    }, [id])

    return (
        <h1> Página de detalhes </h1>
    )
}

export default Details