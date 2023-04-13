import { Container, MovieList, Movie } from "./styles"

function Home() {

    const movies = [
        {
            title: 'Mario Brothers',
            image_url: "https://sm.ign.com/ign_br/movie/s/super-mari/super-mario-bros-o-filme_hnx9.jpg"
        },
        {
            title: 'Avenger',
            image_url: "https://sm.ign.com/ign_br/movie/s/super-mari/super-mario-bros-o-filme_hnx9.jpg"
        },
        {
            title: 'Star wars',
            image_url: "https://sm.ign.com/ign_br/movie/s/super-mari/super-mario-bros-o-filme_hnx9.jpg"
        }
    ]

    return (
        <Container>
            <h1> Movies!</h1>
            <MovieList>

                {movies.map(movie => {
                    return (
                        <Movie>
                            <a href="https://google.com">
                                <img src={movie.image_url} alt={movie.title} />
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