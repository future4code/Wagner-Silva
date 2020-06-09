import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    width: 100%;
    height: 100%;
`

const ColorButton = styled.button`
    background: ${props => props.selected ? props.color : colors.white};
    border: 1px solid ${ props => props.color};
    border-radius: 5px;
    width: 95%;
    height: 35%;
    font-family: 'Montserrat', sans-serif;
    color: ${props => props.selected ? colors.white : props.color};
`

const LinkRegisterButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10%;
`

const RegisterButton = styled.button`
    background: ${colors.purple};
    width: 15%;
    height: 70%;
    border: 2px solid ${colors.white};
    border-radius: 15px;
    font-size: 1em;
    font-weight: bold;
    color: ${colors.white};

    @media (min-width: 320px) and (max-width: 420px) {
        width: 35%;
        height: 60%;
        font-size: 0.7em;
        border-width: 1px;
        border-radius: 5px;
    }
`

const Register = () => {
    const [name, setName] = useState("");
    const [avatarColor, setAvatarColor] = useState("");

    const onChangeName = (event) => {
        setName(event.target.value);
    }

    const onChangeAvatarColor = (color) => {
        setAvatarColor(color);
    }

    const register = () => {
        const user = {
            id: Date.now(),
            username: name,
            color: avatarColor,
            matchs: []
        };

        const users = JSON.parse(localStorage.getItem("users"));

        if(!users) {
            const newUsers = localStorage.setItem("users", JSON.stringify([user]));
            console.log(newUsers);
        } else {
            const newUsers = [...users, user];
            console.log(newUsers)
        }

        localStorage.setItem("actualUser", user.id);

    }

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
                        <label>Nome:</label>
                        <InputName type={"text"} id={"name"} value={name} onChange={onChangeName} />
                        <label>Cor do avatar:</label>
                        <ColorContainer>
                            <ButtonContainer>
                                <ColorButton
                                    color={colors.red}
                                    selected={avatarColor === "red"}
                                    onClick={() => onChangeAvatarColor("red")}
                                >
                                        Vermelho
                                </ColorButton>
                            </ButtonContainer>
                            <ButtonContainer>
                                <ColorButton
                                    color={colors.green}
                                    selected={avatarColor === "green"}
                                    onClick={() => onChangeAvatarColor("green")}
                                >
                                    Verde
                                </ColorButton>
                            </ButtonContainer>
                            <ButtonContainer>
                                <ColorButton
                                        color={colors.blue}
                                        selected={avatarColor === "blue"}
                                        onClick={() => onChangeAvatarColor("blue")}
                                >
                                    Azul
                                </ColorButton>
                            </ButtonContainer>
                            <ButtonContainer>
                                <ColorButton
                                    color={colors.black}
                                    selected={avatarColor === "black"}
                                    onClick={() => onChangeAvatarColor("black")}
                                >
                                    Preto
                                </ColorButton>
                            </ButtonContainer>
                            <ButtonContainer>
                                <ColorButton
                                    color={colors.orange}
                                    selected={avatarColor === "orange"}
                                    onClick={() => onChangeAvatarColor("orange")}
                                >
                                    Laranja
                                </ColorButton>
                            </ButtonContainer>
                            <ButtonContainer>
                                <ColorButton
                                    color={colors.purple}
                                    selected={avatarColor === "purple"}
                                    onClick={() => onChangeAvatarColor("purple")}
                                >
                                    Roxo
                                </ColorButton>
                            </ButtonContainer>
                        </ColorContainer>
                    </FormContainer>
                </RegisterContainer>
                <LinkRegisterButton to={"/matchs"}>
                    <RegisterButton onClick={register}>CADASTRAR</RegisterButton>
                </LinkRegisterButton>
            </RegisterContent>
        </Container>
    )
}

export default Register;