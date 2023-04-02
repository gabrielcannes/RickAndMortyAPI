import styled from "styled-components"
import Navbar from "./components/Navbar"
import { createContext } from "react"
import Home from "./pages/Home"
import { useState, useEffect } from "react"
import Info from "./pages/Info"
import { Routes, Route } from 'react-router-dom'
import './app.css'

export const CharacterContext = createContext()

function App() {

  const [charactersList, setCharactersList] = useState()
  const [selectedCharacter, setSelectedCharacter] = useState()
  const [favoriteList, setFavoriteList] = useState([])

  const addToFavoriteList = (id) => {
    setFavoriteList(prevList => [...prevList, id])
  }

  const removeFromFavoriteList = (id) => {
    setFavoriteList(favoriteList.filter(item => item.id === id))
  }

  useEffect(() => {
    console.log(favoriteList)
  }, [favoriteList])
  

  const contextData = {
    charactersList,
    setCharactersList,
    selectedCharacter,
    setSelectedCharacter,
    addToFavoriteList,
    removeFromFavoriteList,
    favoriteList
  }

  return (
    <AppContainer>
      <CharacterContext.Provider value={contextData}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/info' element={<Info />}></Route>
        </Routes>
      </CharacterContext.Provider>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  margin: 0px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`

export default App
