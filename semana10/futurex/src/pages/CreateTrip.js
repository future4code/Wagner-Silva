import React from 'react';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import useChangeTitle from '../hooks/useChangeTitle';
import useInputValue from '../hooks/useInputValue';
import colors from '../utils/colors';
import styled from 'styled-components';

const CreateTripPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
`

const CreateTripContainer = styled.div`
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

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 70%;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 90%;
    height: 20%;
`

const Input = styled.input`
    width: 80%;
    height: 40%;
    border: 1px solid ${colors.blackLight};
    border-radius: 5px;
`

const Select = styled.select`
    width: 80%;
    height: 40%;
    border: 1px solid ${colors.blackLight};
    border-radius: 5px;
`

const ButtonLoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20%;
`

const Button = styled.button`
    background-color: ${colors.blackLight};
    width: 30%;
    height: 50%;
    border: 1px solid ${colors.orangeDark};
    border-radius: 20px;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    color: ${colors.white};
    cursor: pointer;
    outline: none;
`

const CreateTrip = () => {
    useChangeTitle("Criar viagem")
    const [tripName, onChangeTripName] = useInputValue("");
    const [planet, onChangePlanet] = useInputValue("Mercúrio");
    const [date, onChangeDate] = useInputValue("");
    const [description, onChangeDescription] = useInputValue("");
    const [duration, onChangeDuration] = useInputValue("");

    let history = useHistory();

    const saveTrip = () => history.goBack();

    const planets = ["Mercúrio", "Vênus", "Marte", "Júpiter", "Saturno", "Urano", "Netuno"].map( option => {
        return <option value={option.toLowerCase()}>{option}</option>
    })

    return (
        <CreateTripPageContainer>
            <Header logo={true} />
            <CreateTripContainer>
                <ContentContainer>
                    <ContentHeader>
                        <h3>Cria viagem</h3>
                    </ContentHeader>
                    <FormContainer>
                        <InputContainer>
                            <label>Nome da viagem:</label>
                            <Input type={"text"} value={tripName} onChange={onChangeTripName} />
                        </InputContainer>
                        <InputContainer>
                            <label>Planeta:</label>
                            <Select value={planet} onChange={onChangePlanet}>
                                {planets}
                            </Select>
                        </InputContainer>
                        <InputContainer>
                            <label>Data:</label>
                            <Input type={"date"} value={date} onChange={onChangeDate} />
                        </InputContainer>
                        <InputContainer>
                            <label>Descrição:</label>
                            <Input type={"text"} value={description} onChange={onChangeDescription} />
                        </InputContainer>
                        <InputContainer>
                            <label>Duração:</label>
                            <Input type={"number"} value={duration} onChange={onChangeDuration} />
                        </InputContainer>
                    </FormContainer>
                    <ButtonLoginContainer>
                        <Button onClick={saveTrip}>CRIAR</Button>
                    </ButtonLoginContainer>
                </ContentContainer>
            </CreateTripContainer>
        </CreateTripPageContainer>
    )
}

export default CreateTrip;