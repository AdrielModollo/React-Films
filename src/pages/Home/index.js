import { Container, MovieList, Movie } from "./styles"

function Home() {
    return (
        <Container>
            <h1> Movies!</h1>
            <MovieList>
                <Movie>
                    <a href="https://google.com">
                        <img src="https://sm.ign.com/ign_br/movie/s/super-mari/super-mario-bros-o-filme_hnx9.jpg" alt="Mario" />
                    </a>
                    <span>Mario</span>
                </Movie>

                <Movie>
                    <a href="https://google.com">
                        <img src="https://sm.ign.com/ign_br/movie/s/super-mari/super-mario-bros-o-filme_hnx9.jpg" alt="Mario" />
                    </a>
                    <span>Mario</span>
                </Movie>

                <Movie>
                    <a href="https://google.com">
                        <img src="https://sm.ign.com/ign_br/movie/s/super-mari/super-mario-bros-o-filme_hnx9.jpg" alt="Mario" />
                    </a>
                    <span>Mario</span>
                </Movie>
            </MovieList>
        </Container>
    )
}

export default Home