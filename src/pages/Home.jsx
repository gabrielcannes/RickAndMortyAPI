import Searchbar from "../components/Searchbar"
import CharacterCard from "../components/CharacterCard"
import { useContext } from "react"
import { CharacterContext } from "../App"
import styled from "styled-components"

const Home = () => {

    const { charactersList } = useContext(CharacterContext)
    return (
        <div>
            <Searchbar />
            <HomeContainer>
                {charactersList ? (
                    charactersList.results.map((character) => (
                        <CharacterCard
                            key={character.id}
                            characterInfo={character}
                        />
                    ))
                ) : null
                }
            </HomeContainer>
        </div>
    )
}

const HomeContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 35px;
`

export default Home