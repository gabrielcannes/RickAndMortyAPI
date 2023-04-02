import { useContext, useEffect } from "react"
import { CharacterContext } from "../App"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { useState } from "react"

const Info = () => {

    const primaryColor = '#222'
    const favoriteColor = '#b2df28'

    const [cardStyle, setCardStyle] = useState('flex')
    const [innerColor, setInnerColor] = useState(primaryColor)

    const { selectedCharacter, addToFavoriteList, favoriteList, removeFromFavoriteList } = useContext(CharacterContext)

    const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-conten: center;
    flex-direction: column;
    margin-top: 5%; 
`
    const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-conten: center;
    flex-direction: column;
`
    const Card = styled.div`

`
    const Details = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
`
    const Data = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
`
    const H2 = styled.h2`
    font-size: 1.5rem;
`
    const Header = styled.div`
    margin-bottom: 10px;
`
    const DetailsContainer = styled.div`
    padding: 2rem;
    display: ${cardStyle};
    align-items: center;
    gap: 20px;
    border: 5px solid ${innerColor};
    border-radius: 20%;
    background-color: white;
`
    const Image = styled.img`
    border-radius: 20%;
`
    const Button = styled.button`
    border: solid 1px black;
    background-color: white;
    padding: .25rem 1rem;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 1rem;
    &:hover {
        font-size: 1.1rem;
  }
`
    const Div = styled.div`
        margin-bottom: 0.2rem;
`
    const handleFavoriteClick = (id) => {
        if (favoriteList.find(f => selectedCharacter.id === f)) {
            setInnerColor(primaryColor)
            removeFromFavoriteList(id)
        } else {
            setInnerColor(favoriteColor)
            addToFavoriteList(id)
        }
    }

    function handleResize() {
        if (window.innerWidth < 700) {
            setCardStyle('')
        } else {
            setCardStyle('flex')
        }
    }
    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
    })

    useEffect(() => {
        handleResize()
    }, []);

    useEffect(() => {
        if (favoriteList.find(f => selectedCharacter.id === f)) {
            setInnerColor(favoriteColor)
        } else {
            setInnerColor(primaryColor)
        }
    },)

    return (
        <InfoContainer>
            <DetailsContainer>
                <Card>
                    <ImageContainer>
                        <Image src={selectedCharacter.image} alt="Character Image" />
                    </ImageContainer>
                    <h3>{selectedCharacter.name}</h3>
                </Card>
                <Data>
                    <Header>
                        <H2>Character Info</H2>
                    </Header>
                    <Details>
                        <Div>Created: {selectedCharacter.created}</Div>
                        <Div>Gender: {selectedCharacter.gender}</Div>
                        <Div>Location: {selectedCharacter.location.name}</Div>
                        <Div>Origin: {selectedCharacter.origin.name}</Div>
                        <Div>Species: {selectedCharacter.species}</Div>
                        <Div>Status: {selectedCharacter.status}</Div>
                        {selectedCharacter.type !== '' ? (<Div>Type: {selectedCharacter.type}</Div>) : null}
                    </Details>
                    <Button onClick={() => { handleFavoriteClick(selectedCharacter.id) }}>Favorite</Button>
                    <Link style={{ textDecoration: 'none' }} to={'/'}>
                        <Button>Back</Button>
                    </Link>
                </Data>
            </DetailsContainer>
        </InfoContainer>
    )
}

export default Info