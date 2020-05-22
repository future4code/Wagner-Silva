import React from 'react';
import { useHistory } from 'react-router'
import Header from '../components/Header';
import colors from '../utils/colors';
import styled from 'styled-components';

const CandidateDetailsPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
`

const CandidateDetailsContainer = styled.div`
    background-color: ${colors.orange};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90%;
`

const Candidate = styled.div`
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

const Details = styled.section`
    display: grid;
    grid-template-rows: 40% 50%;
    justify-items: center;
    width: 90%;
    height: 80%;
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
`

const ResponseContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 50%);
    align-items: center;
    width: 100%;
    height: 10%;
`

const DescriptionContainer = styled.div`
    display: grid;
    grid-template-rows: 5% 25% 75%;
    align-items: center;
    width: 100%;
    height: 100%;
`

const Line = styled.hr`
    width: 100%;
    border: none;
    border-bottom: 1px solid ${colors.black};
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
    let history = useHistory()
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