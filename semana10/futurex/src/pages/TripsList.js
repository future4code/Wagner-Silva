import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import ContentContainer from '../components/ContentContainer';
import ContentHeader from '../components/ContentHeader';
import Header from '../components/Header';
import Trip from '../components/ListItem';
import TripsListContainer from '../components/MainContainer';
import TripsListPageContainer from '../components/PageContainer';
import TripsRegistered from '../components/ItemsRegistered';
import useChangeTitle from '../hooks/useChangeTitle';
import colors from '../utils/colors';
import styled from 'styled-components';


const ButtonDetails = styled(Button)`
    background-color: ${colors.orangeDark};
    width: 60%;
    justify-self: center;
    border: 1px solid ${colors.black};
    border-radius: 5px;

    @media (min-width: 320px) and (max-width: 420px) {
        width: 100%;
        font-size: 0.8em;
    }

    @media (min-width: 421px) and (max-width: 800px) {
        width: 80%;
    }
`

const TripsList = () => {
    useChangeTitle("Lista de viagens");
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