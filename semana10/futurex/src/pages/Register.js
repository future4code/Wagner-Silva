import React from 'react';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import useInputValue from '../hooks/useInputValue';
import useChangeTitle from '../hooks/useChangeTitle';
import colors from '../utils/colors';
import styled from 'styled-components';

const RegisterPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
`

const RegisterContainer = styled.div`
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
    width: 30%;
    height: 80%;
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
    width: 100%;
    height: 40%;
    border: 1px solid ${colors.blackLight};
    border-radius: 5px;
`

const ButtonRegisterContainer = styled.div`
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

const Register = () => {
    useChangeTitle("Cadastro");
    const [ username, onChangeUsername ] = useInputValue("");
    const [ password, onChangePassword ] = useInputValue("");
    const [ confirmPassword, onChangeConfirmPassword ] = useInputValue("");

    let history = useHistory();

    const goToAdminPage = () => history.replace("/admin");

    return (
        <RegisterPageContainer>
            <Header logo={true} center={true} />
            <RegisterContainer>
                <ContentContainer>
                    <ContentHeader>
                        <h1>Cadastro</h1>    
                    </ContentHeader>
                    <FormContainer>
                        <InputContainer>
                            <label>Nome de usuário:</label>
                            <Input type={"text"} value={username} onChange={onChangeUsername} />
                        </InputContainer>
                        <InputContainer>
                            <label>Senha:</label>
                            <Input type={"password"} value={password} onChange={onChangePassword} />
                        </InputContainer>
                        <InputContainer>
                            <label>Confirme sua senha:</label>
                            <Input type={"password"} value={confirmPassword} onChange={onChangeConfirmPassword} />
                        </InputContainer>
                    </FormContainer>
                    <ButtonRegisterContainer>
                        <Button onClick={goToAdminPage}>CADASTRAR</Button>
                    </ButtonRegisterContainer>
                </ContentContainer>
            </RegisterContainer>
        </RegisterPageContainer>
    )
}

export default Register;