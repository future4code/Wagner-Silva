import React from 'react';
import Header from '../components/Header';
import colors from '../utils/colors';
import styled from 'styled-components';

import candidates from '../assets/candidates.svg';
import createTrip from '../assets/new-trip.svg';
import tripsImage from '../assets/trips.svg';

const AdminPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
`

const AdminContainer = styled.div`
    background-color: ${colors.orange};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90%;
`

const OptionsContainer = styled.div`
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

const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: 80%;
`

const ButtonOption = styled.button`
    background: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 1px solid black;
    width: 30%;
    height: 50%;
    cursor: pointer;
`

const OptionImage = styled.img`
    width: 100%;
    height: 65%;
    position: absolute;
`

const OptionTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    position: absolute;
    color: ${colors.black};
    z-index: 1;
`

const Admin = () => {
    return (
        <AdminPageContainer>
            <Header logo={true} />
            <AdminContainer>
                <OptionsContainer>
                    <h3>OPÇÕES DE ADMINISTRADOR</h3>
                    <Options>
                        <ButtonOption>
                            <OptionImage src={createTrip} alt={"Nova viagem"} />
                            <OptionTitle>
                                <h2>Criar viagem</h2>
                            </OptionTitle>
                        </ButtonOption>
                        <ButtonOption>
                            <OptionImage src={tripsImage} alt={"Lista de viagens"} />
                            <OptionTitle>
                                <h2>Lista de viagens</h2>
                            </OptionTitle>
                        </ButtonOption>
                        <ButtonOption>
                            <OptionImage src={candidates} alt={"Candidatos"} />
                            <OptionTitle>
                                <h2>Candidaturas</h2>
                            </OptionTitle>
                        </ButtonOption>
                    </Options>
                </OptionsContainer>
            </AdminContainer>
        </AdminPageContainer>
    )
}

export default Admin;