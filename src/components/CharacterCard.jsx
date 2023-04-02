import { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { CharacterContext } from "../App"
import { Link } from 'react-router-dom'
import './components.css'
import { useState } from 'react'

const CharacterCard = ({ characterInfo }) => {

    const primaryColor = '#222'
    const secundaryColor = 'white'
    const favoriteColor = '#b2df28'

    const { setSelectedCharacter, addToFavoriteList, favoriteList, removeFromFavoriteList } = useContext(CharacterContext)
    const [innerColor, setInnerColor] = useState(primaryColor)

    const handleClick = () => {
        setSelectedCharacter(characterInfo)
    }

    const handleFavoriteClick = (id) => {
        if (favoriteList.find(f => characterInfo.id === f)) {
            setInnerColor(primaryColor)
            removeFromFavoriteList(id)
        } else {
            setInnerColor(favoriteColor)
            addToFavoriteList(id)
        }
    }

    useEffect(() => {
        if (favoriteList.find(f => characterInfo.id === f)) {
            setInnerColor(favoriteColor)
        } else {
            setInnerColor(primaryColor)

        }
    },)


    const InnerCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2%;
    background-color: ${innerColor};
    border-radius: 20px;
    padding: 0.25rem;
    cursor: pointer;
    transition: .5s;
`

    const CharacterCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2%;
    background-color: ${primaryColor};
    border-radius: 20px;
    padding: 0.25rem;
    cursor: pointer;
    transition: .5s;
    &:hover {
        color:  ${primaryColor};
        background-color: ${secundaryColor};
        border: 3px solid ${primaryColor};
  }
`

    const Image = styled.img`
    width: 250px;
    hight: auto;
    border-radius: 20px;
    object-fit: contain;
`

    const Span = styled.span`
    font-weight: bold;
    margin-top: 10px;
    color: white;
`
    return (
        <CharacterCardContainer>
            <Link style={{ textDecoration: 'none' }} to={'/info'}>
                <InnerCardContainer onClick={handleClick}>
                    <Image src={characterInfo.image} alt={characterInfo.name + ' image'} />
                    <Span>{characterInfo.name}</Span>
                    <Span>Status: {characterInfo.status}</Span>
                </InnerCardContainer>
            </Link>
            <button className='button-favorite' onClick={() => { handleFavoriteClick(characterInfo.id) }}>Favorite</button>
        </CharacterCardContainer>
    )
}

export default CharacterCard