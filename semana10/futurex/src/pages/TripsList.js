import React from 'react';
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
    border: 1px solid black;
    overflow: scroll;
`

const Trip = styled.article`
    display: flex;
    width: 100%;
    height: 15%;
    border: 1px solid ${colors.black};
`

const TripsList = () => {
    return (
        <TripsListPageContainer>
            <Header logo={true} center={true} />
            <TripsListContainer>
                <ContentContainer>
                    <ContentHeader>
                        <h1>Próximas viagens:</h1>
                    </ContentHeader>
                    <TripsRegistered>
                        <Trip />
                        <Trip />
                        <Trip />
                        <Trip />
                        <Trip />
                        <Trip />
                        <Trip />
                        <Trip />
                        <Trip />
                        <Trip />
                        <Trip />
                    </TripsRegistered>
                </ContentContainer>
            </TripsListContainer>

        </TripsListPageContainer>
    )
}

export default TripsList;