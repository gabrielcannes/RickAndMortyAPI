export const searchCharacter = async (characterName) => {
    try {
        console.log(characterName)
        let url = `https://rickandmortyapi.com/api/character?name=${characterName}`
        const response = await fetch(url)
        return await response.json()
    } catch(error) {
        alert('error: ' + error)
    }
}
export const nextPage = async (characterName, page) => {
    try {
        let url = `https://rickandmortyapi.com/api/character?page=${page}&name=${characterName}`
        const response = await fetch(url)
        return await response.json()
    } catch(error) {
        alert('error: ' + error)
    }
}