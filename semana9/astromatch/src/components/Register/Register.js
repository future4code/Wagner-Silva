import React from 'react';
import Container from '../Container/Container';
import Content from '../Content/Content';
import Header from '../Header/Header';
import styled from 'styled-components';
import colors from '../../utils/colors';

const RegisterContent = styled(Content)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const TextContainer = styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    height: 10%;

    @media (min-width: 320px) and (max-width: 420px) {
        width: 60%;
        font-size: 0.7em;
    }
`

const RegisterContainer = styled.div`
    background-color: ${colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 27%;
    height: 75%;
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: ${colors.blackText};

    @media (min-width: 320px) and (max-width: 420px) {
        width: 80%;
        font-size: 0.9em;
    }
`

const RegisterTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 15%;
`

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 80%;
    height: 85%;
`

const InputName = styled.input`
    width: 100%;
    height: 8%;
    border: 1px solid ${colors.black};
    border-radius: 5px;
`

const ColorContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    width: 100%;
    height: 60%;
    border: 1px solid ${colors.black};
    border-radius: 10px;
`

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
`

const Label = styled.div`
    width: 95%;
    height: 35%;
    position: absolute;
    z-index: 2;

    @media (min-width: 320px) and (max-width: 420px) {
        width: 85%;
    }
`

const Input = styled.div`
    width: 95%;
    height: 35%;
    position: absolute;
    z-index: 1;
`

const ColorButton = styled.button`
    background: ${colors.white};
    border: 1px solid ${ props => props.color};
    border-radius: 5px;
    width: 100%;
    height: 100%;
    font-family: 'Montserrat', sans-serif;
    color: ${props => props.color};

    :focus {
        background-color: ${props => props.color};
        color: ${colors.white};
    }
`

const RegisterButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10%;
`

const RegisterButton = styled.button`
    background: #4B19B8;
    width: 15%;
    height: 70%;
    border: 2px solid #FFFFFF;
    border-radius: 15px;
    font-size: 1em;
    font-weight: bold;
    color: #FFFFFF;

    @media (min-width: 320px) and (max-width: 420px) {
        width: 35%;
        height: 60%;
        font-size: 0.7em;
        border-width: 1px;
        border-radius: 5px;
    }
`

const Register = () => {
    return (
        <Container>
            <Header logoCenter={true} />
            <RegisterContent>
                <TextContainer>
                    <h1>CADASTRO</h1>
                </TextContainer>
                <RegisterContainer>
                    <RegisterTitleContainer>
                        <h4>NOVA CONTA</h4>
                    </RegisterTitleContainer>
                    <FormContainer>
                        <label forHTML={"name"}>Nome:</label>
                        <InputName type={"text"} name={"name"} />
                        <label forHTML={"color"}>Cor do avatar:</label>
                        <ColorContainer>
                            <ButtonContainer>
                                <Label forHTML={"red"}>
                                    <ColorButton color={colors.red}>Vermelho</ColorButton>
                                </Label>
                                <Input type={"radio"} id={"red"} />
                            </ButtonContainer>
                            <ButtonContainer>
                                <Label forHTML={"green"}>
                                    <ColorButton color={colors.green}>Verde</ColorButton>
                                </Label>
                                <Input type={"radio"} id={"green"} />
                            </ButtonContainer>
                            <ButtonContainer>
                                <Label forHTML={"blue"}>
                                    <ColorButton color={colors.blueAvatar}>Azul</ColorButton>
                                </Label>
                                <Input type={"radio"} id={"blue"} />
                            </ButtonContainer>
                            <ButtonContainer>
                                <Label forHTML={"black"}>
                                    <ColorButton color={colors.black}>Preto</ColorButton>
                                </Label>
                                <Input type={"radio"} id={"black"} />
                            </ButtonContainer>
                            <ButtonContainer>
                                <Label forHTML={"orange"}>
                                    <ColorButton color={colors.orange}>Laranja</ColorButton>
                                </Label>
                                <Input type={"radio"} id={"orange"} />
                            </ButtonContainer>
                            <ButtonContainer>
                                <Label forHTML={"purple"}>
                                    <ColorButton color={colors.purple}>Roxo</ColorButton>
                                </Label>
                                <Input type={"radio"} id={"purple"} />
                            </ButtonContainer>
                        </ColorContainer>
                    </FormContainer>
                </RegisterContainer>
                <RegisterButtonContainer>
                    <RegisterButton>CADASTRAR</RegisterButton>
                </RegisterButtonContainer>
            </RegisterContent>
        </Container>
    )
}

export default Register;