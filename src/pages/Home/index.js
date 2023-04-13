import { Container, MovieList, Movie } from "./styles"
import { APIKey } from '../../config/key'
import { useState, useEffect } from 'react'


function Home() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        // consumir a api...
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => {
                console.log(data.results)
                setMovies(data.results)
            })
    }, [])

    return (
        <Container>
            <h1> Movies!</h1>
            <MovieList>
                {movies.map(movie => {
                    return (
                        <Movie key={movie.id}>
                            <a href="https://google.com">
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                            </a>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>
        </Container>
    )
}

export default Home
