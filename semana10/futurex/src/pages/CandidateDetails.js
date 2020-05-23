import React from 'react';
import { useHistory } from 'react-router';
import Candidate from '../components/ContentContainer';
import CandidateDetailsPageContainer from '../components/PageContainer';
import CandidateDetailsContainer from '../components/MainContainer';
import Details from '../components/Details';
import DescriptionContainer from '../components/DescriptionContainer';
import Header from '../components/Header';
import InfoContainer from '../components/InfoContainer';
import Line from '../components/Line';
import useChangeTitle from '../hooks/useChangeTitle';
import colors from '../utils/colors';
import styled from 'styled-components';


const ResponseContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 50%);
    align-items: center;
    width: 100%;
    height: 10%;
`

const PresentationText = styled.p`
    align-self: flex-start;
`

const ButtonCandidate = styled.button`
    background-color: ${props => props.color};
    width: 40%;
    height: 100%;
    justify-self: center;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    color: ${colors.white};
    cursor: pointer;
    outline: none;
`

const CandidateDetails = () => {
    useChangeTitle("Detalhes do candidato");
    let history = useHistory();
    const goToTripsListPage = () => history.goBack();

    return (
        <CandidateDetailsPageContainer>
            <Header logo={true} />
            <CandidateDetailsContainer>
                <Candidate>
                    <Details>
                        <InfoContainer>
                            <h3>Nome do candidato</h3>
                            <p>País</p>
                            <p>Profissão</p>
                            <p>Idade</p>
                        </InfoContainer>
                        <DescriptionContainer>
                            <Line />
                            <h4>Texto de apresentação:</h4>
                            <PresentationText>kowngowrngopqrgnp</PresentationText>
                        </DescriptionContainer>
                    </Details>
                    <ResponseContainer>
                        <ButtonCandidate color={colors.red} onClick={goToTripsListPage}>REJEITAR CANDIDATURA</ButtonCandidate>
                        <ButtonCandidate color={colors.greenDark} onClick={goToTripsListPage}>ACEITAR CANDIDATURA</ButtonCandidate>
                    </ResponseContainer>
                </Candidate>
            </CandidateDetailsContainer>
        </CandidateDetailsPageContainer>
    )
}

export default CandidateDetails;