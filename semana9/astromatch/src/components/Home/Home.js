import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../Container/Container';
import Content from '../Content/Content';
import Header from '../Header/Header';
import couple_one from '../../assets/couple_one.svg';
import couple_two from '../../assets/couple_two.svg';
import couple_three from '../../assets/couple_three.svg';
import colors from '../../utils/colors';

const HomeContent = styled(Content)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const TextContainer = styled.article`
    width: 22%;
    height: 20%;
    text-align: center;

    @media (min-width: 320px) and (max-width: 420px) {
        width: 60%;
        height: 15%;
        font-size: 0.7em;
    }
`

const ImagesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 40%;

    @media (min-width: 320px) and (max-width: 420px) {
        width: 100%;
        height: 30%;
    }
`

const Image = styled.img`
    width: 25%;
    height: 100%;

    @media (min-width: 320px) and (max-width: 420px) {
        width: 30%;
    }
`

const LinkMatchsButton = styled(Link)`
    width: 15%;
    height: 8%;

    @media (min-width: 320px) and (max-width: 420px) {
        width: 35%;
    }
`

const MatchsButton = styled.button`
    background: ${colors.purple};
    border: 2px solid ${colors.white};
    border-radius: 15px;
    color: ${colors.white};
    font-size: 0.9em;
    font-weight: bold;
    width: 100%;
    height: 100%;

    @media (min-width: 320px) and (max-width: 420px) {
        border: 1px solid ${colors.white};
        border-radius: 10px;
        font-size: 0.7em;
    }
`

const Home = () => {
    return (
        <Container>
            <Header />
            <HomeContent>
                <TextContainer>
                    <h1>ENCONTRE FINALMENTE O AMOR QUE TE LEVARÁ AOS CÉUS</h1>
                </TextContainer>
                <ImagesContainer>
                    <Image src={couple_two} alt={"Casal"} />
                    <Image src={couple_one} alt={"Casal"} />
                    <Image src={couple_three} alt={"Casal"} />
                </ImagesContainer>
                <LinkMatchsButton to={"/login"}>
                    <MatchsButton>DAR MATCHS</MatchsButton>
                </LinkMatchsButton>
            </HomeContent>
        </Container>
    )
}

export default Home;