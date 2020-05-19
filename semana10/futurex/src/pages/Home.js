import React from 'react';
import Header from '../components/Header';
import colors from '../utils/colors';
import links from '../utils/links';
import styled from 'styled-components';

const HomeContainer = styled.div`
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
`

const ButtonRegister = styled.button`
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
`

const Home = () => {
    return (
        <HomeContainer>
            <Header login={true} />
            <LogoContainer>
                <Logo src={links.logo} />
            </LogoContainer>
            <InfoContainer>
                <h1>Quebrando as barreiras do turismo</h1>
                <h3>Faça sua primeira viagem espacial conosco!</h3>
                <ButtonRegister>Quero me inscrever</ButtonRegister>
            </InfoContainer>
        </HomeContainer>
    )
}

export default Home;