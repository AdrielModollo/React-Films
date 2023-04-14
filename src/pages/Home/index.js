import { Container, MovieList, Movie } from "./styles"
import { useState, useEffect } from 'react'
import { Link, Navigate } from "react-router-dom"
import { useAuth } from "../Login/authContext"

function Home() {
    const { isAuthenticated, logout, token } = useAuth();

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/movies/popular`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setMovies(data.results)
            })
    }, [token])


    const handleLogout = () => {
        logout();
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return (
        <Container>
            <h1> Movies!</h1>
            <button onClick={handleLogout} className="logout-button">Logout</button>
            <MovieList>
                {movies.map(movie => {
                    return (
                        <Movie key={movie.id}>
                            <Link to={`/details/${movie.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                            </Link>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>
        </Container>
    )
}

export default Home;
