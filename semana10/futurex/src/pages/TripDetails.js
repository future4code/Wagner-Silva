import React from 'react';
import { useHistory } from 'react-router';
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
`

const TripDetails = () => {
    useChangeTitle("Detalhes da viagem");
    let history = useHistory();
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