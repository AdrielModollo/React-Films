import { Container } from "./styles"

function Home() {
    return (
        <Container>
            <h1> Movies!</h1>
            <ul>
                <li>
                    <img src="https://sm.ign.com/ign_br/movie/s/super-mari/super-mario-bros-o-filme_hnx9.jpg" alt="Mario" />
                    <span>Mario</span>
                </li>

                <li>
                    <img src="https://sm.ign.com/ign_br/movie/s/super-mari/super-mario-bros-o-filme_hnx9.jpg" alt="Mario" />
                    <span>Mario</span>
                </li>

                <li>
                    <img src="https://sm.ign.com/ign_br/movie/s/super-mari/super-mario-bros-o-filme_hnx9.jpg" alt="Mario" />
                    <span>Mario</span>
                </li>
            </ul>
        </Container>
    )
}

export default Home