import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../components/Button';
import ButtonContainer from '../components/ButtonContainer';
import ContentContainer from '../components/ContentContainer';
import ContentHeader from '../components/ContentHeader';
import FormContainer from '../components/FormContainer';
import Header from '../components/Header';
import Input from '../components/Input';
import InputContainer from '../components/InputContainer';
import SubmitCandidaturePageContainer from '../components/PageContainer';
import SubmitCandidatureContainer from '../components/MainContainer';
import useChangeTitle from '../hooks/useChangeTitle';
import useInputValue from '../hooks/useInputValue';
import axios from 'axios';
import colors from '../utils/colors';
import { baseUrlAPI } from '../utils/links';
import styled from 'styled-components';


const TextArea = styled.textarea`
    width: 100%;
    border: 1px solid ${colors.blackLight};
    border-radius: 5px;
`
const Select = styled.select`
    width: 90%;
    height: 40%;
    border: 1px solid ${colors.blackLight};
    border-radius: 5px;
`

const ButtonSubmitContainer = styled(ButtonContainer)`
    height: 15%;
`

const SubmitCandidature = () => {
    useChangeTitle("Enviar candidatura");

    const [candidateName, onChangeCandidateName] = useInputValue("");
    const [age, onChangeAge] = useInputValue("");
    const [candidateText, onChangeCandidateText] = useInputValue("");
    const [profession, onChangeProfession] = useInputValue("");
    const [country, onChangeCountry] = useInputValue("");
    const [trip, onChangeTrip] = useInputValue("");
    const [tripsList, setTripsList] = useState([]);

    let history = useHistory();

    useEffect(() => {
        axios
            .get(`${baseUrlAPI}/trips`)
            .then( response => {
                setTripsList(["-", ...response.data.trips]);
            })
            .catch((error) => {
                console.log(error);
                alert("Erro na obtenção de dados")
            });
    }, [setTripsList]);

    const registerCandidature = async () => {
        if(trip) {
            const body = {
                name: candidateName,
                age,
                profession,
                country,
                applicationText: candidateText
            }

            try {
                await axios.post(`${baseUrlAPI}/trips/${trip}/apply`, body);
                alert("Sua candidatura foi registrada. Em breve você saberá o resultado.")
                history.goBack();
            } catch(error) {
                alert("Erro ao cadastrar candidatura");
            }
        }
    }

    const tripsOptions = tripsList.map( trip => {
        return <option value={trip.id}>{trip.name}</option>
    })

    return (
        <SubmitCandidaturePageContainer>
            <Header logo={true} />
            <SubmitCandidatureContainer>
                <ContentContainer>
                    <ContentHeader>
                        <h3>Candidatura</h3>
                    </ContentHeader>
                    <FormContainer>
                        <InputContainer>
                            <label>Nome:</label>
                            <Input type={"text"} value={candidateName} onChange={onChangeCandidateName} />
                        </InputContainer>
                        <InputContainer>
                            <label>Idade:</label>
                            <Input type={"number"} value={age} onChange={onChangeAge} />
                        </InputContainer>
                        <InputContainer>
                            <label>Profissão:</label>
                            <Input type={"text"} value={profession} onChange={onChangeProfession} />
                        </InputContainer>
                        <InputContainer>
                            <label>País:</label>
                            <Input type={"text"} value={country} onChange={onChangeCountry} />
                        </InputContainer>
                        <InputContainer>
                            <label>Viagem:</label>
                            <Select value={trip} onChange={onChangeTrip}>
                                {tripsOptions}
                            </Select>
                        </InputContainer>
                        <InputContainer>
                            <label>Quais motivos para a FutureX aceitá-lo ?</label>
                            <TextArea rows={5} value={candidateText} onChange={onChangeCandidateText} />
                        </InputContainer>
                    </FormContainer>
                    <ButtonSubmitContainer>
                        <Button onClick={registerCandidature}>ENVIAR</Button>
                    </ButtonSubmitContainer>
                </ContentContainer>
            </SubmitCandidatureContainer>
        </SubmitCandidaturePageContainer>
    )
}

export default SubmitCandidature;