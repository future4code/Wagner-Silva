import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import DescriptionContainer from '../components/DescriptionContainer';
import Details from '../components/Details';
import DurationContainer from '../components/SingleLineContainer';
import Header from '../components/Header';
import InfoContainer from '../components/InfoContainer';
import Line from '../components/Line';
import Trip from '../components/ContentContainer';
import TripDetailsContainer from '../components/MainContainer';
import TripDetailsPageContainer from '../components/PageContainer';
import useChangeTitle from '../hooks/useChangeTitle';
import { usePrivatePage } from '../hooks/usePrivatePage';
import axios from 'axios';
import colors from '../utils/colors';
import styled from 'styled-components';


const DescriptionText = styled.p`
    align-self: flex-start;
`

const ButtonCandidate = styled.button`
    background-color: ${colors.orangeDark};
    width: 30%;
    height: 10%;
    justify-self: center;
    border: 1px solid ${colors.black};
    border-radius: 5px;
    font-weight: bold;
    color: ${colors.white};
    cursor: pointer;
    outline: none;

    @media (min-width: 320px) and (max-width: 420px) {
        width: 50%;
        font-size: 1em;
    }

    @media (min-width: 421px) and (max-width: 800px) {
        width: 40%;
        font-size: 1em;
    }
`

const TripDetails = () => {
    useChangeTitle("Detalhes da viagem");
    usePrivatePage();
    
    const [ trip, setTrip ] = useState({});

    const pathParams = useParams();
    let history = useHistory();

    useEffect(() => {
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/wagner/trip/${pathParams.trip_id}`)
            .then( response => {
                setTrip(response.data)
            })
    })

    return (
        <TripDetailsPageContainer>
            <Header logo={true} center={true} />
            <TripDetailsContainer>
                <Trip>
                    <Details>
                        <InfoContainer>
                            <h3>Nome viagem</h3>
                            <p>Planeta</p>
                            <DurationContainer>
                                <p><strong>Data</strong></p>
                                <p><strong>Duração</strong></p>
                            </DurationContainer>
                        </InfoContainer>
                        <DescriptionContainer>
                            <Line />
                            <h4>Descrição</h4>
                            <DescriptionText>kowngowrngopqrgnp</DescriptionText>
                        </DescriptionContainer>
                    </Details>
                    <ButtonCandidate>QUERO ENTRAR NESSA</ButtonCandidate>
                </Trip>
            </TripDetailsContainer>
        </TripDetailsPageContainer>
    )
}

export default TripDetails;