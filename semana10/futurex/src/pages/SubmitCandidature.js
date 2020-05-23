import React from 'react';
import Button from '../components/Button';
import ButtonSubmitContainer from '../components/ButtonContainer';
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
import colors from '../utils/colors';
import styled from 'styled-components';


const TextArea = styled.textarea`
    width: 100%;
    border: 1px solid ${colors.blackLight};
    border-radius: 5px;
`


const SubmitCandidature = () => {
    useChangeTitle("Enviar candidatura")
    const [candidateName, onChangeCandidateName] = useInputValue("");
    const [age, onChangeAge] = useInputValue("");
    const [candidateText, onChangeCandidateText] = useInputValue("");
    const [profession, onChangeProfession] = useInputValue("");
    const [country, onChangeCountry] = useInputValue("");

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
                            <label>Quais motivos para a FutureX aceitá-lo ?</label>
                            <TextArea rows={5} value={candidateText} onChange={onChangeCandidateText} />
                        </InputContainer>
                    </FormContainer>
                    <ButtonSubmitContainer>
                        <Button>ENVIAR</Button>
                    </ButtonSubmitContainer>
                </ContentContainer>
            </SubmitCandidatureContainer>
        </SubmitCandidaturePageContainer>
    )
}

export default SubmitCandidature;