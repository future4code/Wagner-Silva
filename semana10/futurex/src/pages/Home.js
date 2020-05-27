import React from 'react';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import useChangeTitle from '../hooks/useChangeTitle';
import colors from '../utils/colors';
import { logo } from '../utils/links';
import styled from 'styled-components';

const HomePageContainer = styled.div`
    width: 100vw;
    height: 100vh;
`

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 35%;
`

const Logo = styled.img`
    height: 100%;
`

const InfoContainer = styled.div`
    background-color: ${colors.orange};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: ${colors.white};
    width: 100%;
    height: 55%;

    @media (min-width: 320px) and (max-width: 420px) {
        font-size: 0.8em;
        text-align: center;
    }
`

const Button = styled.button`
    background: none;
    width: 20%;
    height: 15%;
    border: 2px solid ${colors.black};
    border-radius: 20px;
    color: ${colors.black};
    font-family: 'Lato', sans-serif;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    outline: none;

    :hover, :focus {
        background-color: ${colors.blackLight};
        border-color: ${colors.black};
        color: ${colors.white};
    }

    @media (min-width: 320px) and (max-width: 420px) {
        background-color: ${colors.blackLight};
        width: 40%;
        font-size: 1.2em;
        color: ${colors.white};
    }
    
    @media (min-width: 421px) and (max-width: 800px) {
        background-color: ${colors.blackLight};
        width: 30%;
        font-size: 1.2em;
        color: ${colors.white};
    }
`

const Home = () => {
    useChangeTitle("Vá ao espaço conosco!")
    
    let history = useHistory();
    const goToRegisterPage = () => history.push("/register");
    const goToTripsListPage = () => history.push("/candidature");

    return (
        <HomePageContainer>
            <Header login={true} />
            <LogoContainer>
                <Logo src={logo} />
            </LogoContainer>
            <InfoContainer>
                <h1>Quebrando as barreiras do turismo</h1>
                <h3>Faça sua primeira viagem espacial conosco!</h3>
                <Button onClick={goToTripsListPage}>Quero viajar</Button>
                <Button onClick={goToRegisterPage}>Quero participar</Button>
            </InfoContainer>
        </HomePageContainer>
    )
}

export default Home;