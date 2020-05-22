import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import colors from '../utils/colors';
import styled from 'styled-components';

const TripsListPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
`

const TripsListContainer = styled.div`
    background-color: ${colors.orange};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90%;
`

const ContentContainer = styled.section`
    background-color: ${colors.whiteVariant};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    height: 90%;
    border-radius: 10px;
    color: ${colors.blackLight};
`

const ContentHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10%;
`

const TripsRegistered = styled.section`
    width: 90%;
    height: 90%;
    overflow: scroll;
`

const Trip = styled.article`
    display: grid;
    grid-template-columns: 2fr repeat(3, 1fr);
    align-items: center;
    width: 100%;
    height: 15%;
`

const ButtonDetails = styled.button`
    background-color: ${colors.orangeDark};
    width: 60%;
    height: 50%;
    justify-self: center;
    border: 1px solid ${colors.black};
    border-radius: 5px;
    font-weight: bold;
    color: ${colors.white};
    cursor: pointer;
    outline: none;
`

const TripsList = () => {
    let history = useHistory();
    const goToTripDetails = () => history.push("/trips/viagem1");

    return (
        <TripsListPageContainer>
            <Header logo={true} center={true} />
            <TripsListContainer>
                <ContentContainer>
                    <ContentHeader>
                        <h1>Próximas viagens:</h1>
                    </ContentHeader>
                    <TripsRegistered>
                        <Trip>
                            <h3>Nome viagem</h3>
                            <p>Planeta</p>
                            <p>Dias</p>
                            <ButtonDetails onClick={goToTripDetails}>Detalhes</ButtonDetails>
                        </Trip>
                        <Trip>
                            <h3>Nome viagem</h3>
                            <p>Planeta</p>
                            <p>Dias</p>
                            <ButtonDetails>Detalhes</ButtonDetails>
                        </Trip>
                        <Trip>
                            <h3>Nome viagem</h3>
                            <p>Planeta</p>
                            <p>Dias</p>
                            <ButtonDetails>Detalhes</ButtonDetails>
                        </Trip>
                    </TripsRegistered>
                </ContentContainer>
            </TripsListContainer>

        </TripsListPageContainer>
    )
}

export default TripsList;