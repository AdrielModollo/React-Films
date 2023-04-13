import { Container } from "./styles"

function Home() {
    return (
        <Container>
            <h1> Movies!</h1>
            <ul>
                <li>
                    <a href="https://google.com">
                        <img src="https://sm.ign.com/ign_br/movie/s/super-mari/super-mario-bros-o-filme_hnx9.jpg" alt="Mario" />
                    </a>
                    <span>Mario</span>
                </li>

                <li>
                    <a href="https://google.com">
                        <img src="https://sm.ign.com/ign_br/movie/s/super-mari/super-mario-bros-o-filme_hnx9.jpg" alt="Mario" />
                    </a>
                    <span>Mario</span>
                </li>

                <li>
                    <a href="https://google.com">
                        <img src="https://sm.ign.com/ign_br/movie/s/super-mari/super-mario-bros-o-filme_hnx9.jpg" alt="Mario" />
                    </a>
                    <span>Mario</span>
                </li>
            </ul>
        </Container>
    )
}

export default Home