import { useState, useContext } from "react"
import styled from "styled-components"
import { searchCharacter } from "../api"
import { CharacterContext } from "../App"

const Searchbar = () => {
    const [search, setSearch] = useState()
    const { setCharactersList } = useContext(CharacterContext)

    const onChangeHandler = (e) => {
        setSearch(e.target.value)
    }
    const onButtonClickHandler = () => {
        onSearchHandler(search)
    }

    const onSearchHandler = async (characterName) => {
        const result = await searchCharacter(characterName)
        setCharactersList(result)
    }

    return (
        <div>
            <SearchBar>
                <Input
                    type="text"
                    placeholder="Search Character"
                    onChange={onChangeHandler}
                />
                <Button onClick={onButtonClickHandler}>Search</Button>
            </SearchBar>
        </div>
    )
}

const Input = styled.input`
    padding: 10px;
    border: 1px solid black;
`

const SearchBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
    padding: 10px;
    background-color: white;
    border: 1px solid black
`

export default Searchbar