import { Link, useParams, Navigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { Container } from "./styles"
import { useAuth } from "../Login/authContext"
import createRental from "../Rentals/createRental";

function Details() {
    const { isAuthenticated, logout, token, user } = useAuth();
    const { id } = useParams()

    const [movie, setMovie] = useState({})
    const [rentalError, setRentalError] = useState(null)
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        fetch(`http://localhost:3000/movies/id?movie_id=${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
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

                setMovie(movie)
            })
    }, [id, token])

    const handleLogout = () => {
        logout();
    }


    const handleRent = () => {
        createRental(id, user.id, token)
            .then(data => {
                setRentalError(null)
                alert('Successfully rented movie')
            })
            .catch(error => {
                if (error.message.includes('409')) {
                    setRentalError('409')
                    alert('Rented movie, you can rent the movie again only after 48hrs!!')
                } else {
                    alert('Error when renting movie')
                }
            })
    }


    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return (
        <Container>
            <button onClick={handleLogout} className="logout-button">Logout</button>
            <div className="movie">
                <img src={movie.image} alt={movie.sinopse} />
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span>Sinopse: {movie.sinopse} </span>
                    <span className="release-date">Release: {movie.releaseDate} </span>
                    {user.id && movie.id && (
                        <button onClick={() => handleRent(user.id, movie.id)} disabled={rentalError === "409"}>
                            Rent Movie
                        </button>
                    )}
                    <Link to="/"><button> Go Back </button></Link>
                </div>
            </div>
        </Container>
    )
}

export default Details
