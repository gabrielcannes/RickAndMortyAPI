import styled from 'styled-components'
import logo from '../../src/img/rick-and-morty-logo.png'

const Navbar = () => {
    return (
        <Nav>
            <ImageContainer>
                <Image src={logo} alt="Rick and Morty Logo" />
            </ImageContainer>
        </Nav>
    )
}

const ImageContainer = styled.div`
    
`

const Image = styled.img`
    width: 400px;
    height: auto;
    margin: 5%;
`
const Nav = styled.nav`
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 50px;   
`

export default Navbar