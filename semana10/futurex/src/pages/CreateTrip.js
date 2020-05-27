import React from 'react';
import { useHistory } from 'react-router';
import Button from '../components/Button';
import ButtonLoginContainer from '../components/ButtonContainer';
import ContentContainer from '../components/ContentContainer';
import ContentHeader from '../components/ContentHeader';
import CreateTripPageContainer from '../components/PageContainer';
import CreateTripContainer from '../components/MainContainer';
import FormContainer from '../components/FormContainer';
import Header from '../components/Header';
import Input from '../components/Input';
import InputContainer from '../components/InputContainer';
import useChangeTitle from '../hooks/useChangeTitle';
import useInputValue from '../hooks/useInputValue';
import { usePrivatePage } from '../hooks/usePrivatePage';
import colors from '../utils/colors';
import styled from 'styled-components';

const Select = styled.select`
    width: 80%;
    height: 40%;
    border: 1px solid ${colors.blackLight};
    border-radius: 5px;
`

const CreateTrip = () => {
    useChangeTitle("Criar viagem");
    usePrivatePage();
    
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
                        <h3>Criar viagem</h3>
                    </ContentHeader>
                    <FormContainer>
                        <InputContainer>
                            <label forHtml={"trip-name"}>Nome da viagem:</label>
                            <Input id={"trip-name"}
                                type={"text"}
                                value={tripName} 
                                onChange={onChangeTripName}
                                required={true}
                            />
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
                        <ButtonLoginContainer>
                            <Button onSubmit={saveTrip}>CRIAR</Button>
                        </ButtonLoginContainer>
                    </FormContainer>
                </ContentContainer>
            </CreateTripContainer>
        </CreateTripPageContainer>
    )
}

export default CreateTrip;