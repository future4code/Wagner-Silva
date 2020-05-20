import React from 'react';
import Header from '../components/Header';
import colors from '../utils/colors';
import styled from 'styled-components';

const TripDetailsPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
`

const TripDetailsContainer = styled.div`
    background-color: ${colors.orange};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90%;
`

const Trip = styled.div`
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

const DurationContainer = styled.div`
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