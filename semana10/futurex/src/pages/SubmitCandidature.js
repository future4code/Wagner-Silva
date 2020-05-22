import React from 'react';
import Header from '../components/Header';
import useChangeTitle from '../hooks/useChangeTitle';
import useInputValue from '../hooks/useInputValue';
import colors from '../utils/colors';
import styled from 'styled-components';

const SubmitCandidaturePageContainer = styled.div`
    width: 100vw;
    height: 100vh;
`

const SubmitCandidatureContainer = styled.div`
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

const TextArea = styled.textarea`
    width: 80%;
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

const SubmitCandidature = () => {
    useChangeTitle("Candidatura")
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
                            <label>Por que a FutureX deve aceitá-lo nesta viagem ?</label>
                            <TextArea rows={5} value={candidateText} onChange={onChangeCandidateText} />
                        </InputContainer>
                    </FormContainer>
                    <ButtonLoginContainer>
                        <Button>ENVIAR</Button>
                    </ButtonLoginContainer>
                </ContentContainer>
            </SubmitCandidatureContainer>
        </SubmitCandidaturePageContainer>
    )
}

export default SubmitCandidature;