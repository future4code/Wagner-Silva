import React from 'react';
import { useHistory } from 'react-router';
import Button from '../components/Button';
import Candidate from '../components/ListItem';
import Candidates from '../components/ContentContainer';
import CandidatesHeader from '../components/ContentHeader';
import CandidatesListContainer from '../components/MainContainer';
import CandidatesListPageContainer from '../components/PageContainer';
import CandidatesRegistered from '../components/ItemsRegistered';
import Header from '../components/Header';
import useChangeTitle from '../hooks/useChangeTitle';
import { usePrivatePage } from '../hooks/usePrivatePage';
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

const CandidatesList = () => {
    useChangeTitle("Lista de candidatos");
    usePrivatePage();

    let history = useHistory();
    const goToCandidateDetails = () => history.push("/admin/candidates/1/candidates/1");

    return (
        <CandidatesListPageContainer>
            <Header logo={true} />
            <CandidatesListContainer>
                <Candidates>
                    <CandidatesHeader>
                        <h1>Candidatos:</h1>
                    </CandidatesHeader>
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
                </Candidates>
            </CandidatesListContainer>
        </CandidatesListPageContainer>
    )
}

export default CandidatesList;