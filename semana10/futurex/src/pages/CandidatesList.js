import React from 'react';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import colors from '../utils/colors';
import styled from 'styled-components';

const CandidatesListPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
`

const CandidatesListContainer = styled.div`
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

const CandidatesRegistered = styled.section`
    width: 90%;
    height: 90%;
    overflow: scroll;
`

const Candidate = styled.article`
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

const CandidatesList = () => {
    let history = useHistory();
    const goToCandidateDetails = () => history.push("/admin/candidates/1/candidates/1");

    return (
        <CandidatesListPageContainer>
            <Header logo={true} />
            <CandidatesListContainer>
                <ContentContainer>
                    <ContentHeader>
                        <h1>Candidatos:</h1>
                    </ContentHeader>
                    <CandidatesRegistered>
                        <Candidate>
                            <h3>Nome do candidato</h3>
                            <p>País</p>
                            <p>Idade</p>
                            <ButtonDetails onClick={goToCandidateDetails}>Detalhes</ButtonDetails>
                        </Candidate>
                        <Candidate>
                            <h3>Nome do candidato</h3>
                            <p>País</p>
                            <p>Idade</p>
                            <ButtonDetails>Detalhes</ButtonDetails>
                        </Candidate>
                        <Candidate>
                            <h3>Nome do candidato</h3>
                            <p>País</p>
                            <p>Idade</p>
                            <ButtonDetails>Detalhes</ButtonDetails>
                        </Candidate>
                    </CandidatesRegistered>
                </ContentContainer>
            </CandidatesListContainer>
        </CandidatesListPageContainer>
    )
}

export default CandidatesList;