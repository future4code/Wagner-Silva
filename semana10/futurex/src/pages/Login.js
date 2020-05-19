import React from 'react';
import Header from '../components/Header';
import useChangeTitle from '../hooks/useChangeTitle';
import useInputValue from '../hooks/useInputValue';
import colors from '../utils/colors';
import styled from 'styled-components';

const LoginPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
`

const LoginContainer = styled.div`
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

const Login = () => {
    useChangeTitle("FutureX - Login");
    const [ username, onChangeUsername ] = useInputValue();
    const [ password, onChangePassword ] = useInputValue();

    return (
        <LoginPageContainer>
            <Header logo={true} center={true} />
            <LoginContainer>
                <ContentContainer>
                    <ContentHeader>
                        <h1>LOGIN</h1>    
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
                    </FormContainer>
                    <ButtonLoginContainer>
                        <Button>ENTRAR</Button>
                    </ButtonLoginContainer>
                </ContentContainer>
            </LoginContainer>
        </LoginPageContainer>
    )
}

export default Login;