import React from 'react';
import { useHistory } from 'react-router';
import AdminPageContainer from '../components/PageContainer';
import AdminContainer from '../components/MainContainer';
import Header from '../components/Header';
import OptionsContainer from '../components/ContentContainer';
import useChangeTitle from '../hooks/useChangeTitle';
import colors from '../utils/colors';
import styled from 'styled-components';

import createTrip from '../assets/new-trip.svg';
import tripsImage from '../assets/trips.svg';


const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
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
    useChangeTitle("Admin");

    let history = useHistory();
    const goToCreateTripPage = () => history.push("/admin/trips/create");
    const goToTripsListPage = () => history.push("/admin/trips");

    return (
        <AdminPageContainer>
            <Header logo={true} />
            <AdminContainer>
                <OptionsContainer>
                    <h3>OPÇÕES DE ADMINISTRADOR</h3>
                    <Options>
                        <ButtonOption onClick={goToCreateTripPage}>
                            <OptionImage src={createTrip} alt={"Nova viagem"} />
                            <OptionTitle>
                                <h2>Criar viagem</h2>
                            </OptionTitle>
                        </ButtonOption>
                        <ButtonOption onClick={goToTripsListPage}>
                            <OptionImage src={tripsImage} alt={"Lista de viagens"} />
                            <OptionTitle>
                                <h2>Lista de viagens</h2>
                            </OptionTitle>
                        </ButtonOption>
                    </Options>
                </OptionsContainer>
            </AdminContainer>
        </AdminPageContainer>
    )
}

export default Admin;