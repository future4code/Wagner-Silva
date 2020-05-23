import React from 'react';
import { useHistory } from 'react-router';
import Button from '../components/Button';
import ButtonLoginContainer from '../components/ButtonContainer';
import Content from '../components/ContentContainer';
import ContentHeader from '../components/ContentHeader';
import FormContainer from '../components/FormContainer';
import Header from '../components/Header';
import Input from '../components/Input'
import InputContainer from '../components/InputContainer'
import LoginContainer from '../components/MainContainer';
import LoginPageContainer from '../components/PageContainer';
import useChangeTitle from '../hooks/useChangeTitle';
import useInputValue from '../hooks/useInputValue';
import styled from 'styled-components';


const ContentContainer = styled(Content)`
    width: 30%;
    height: 80%;

    @media (min-width: 320px) and (max-width: 420px) {
        width: 70%;
        font-size: 0.8em;
    }

    @media (min-width: 421px) and (max-width: 800px) {
        width: 60%;
        font-size: 1.2em;
    }
`

const Login = () => {
    useChangeTitle("Login");
    const [ username, onChangeUsername ] = useInputValue("");
    const [ password, onChangePassword ] = useInputValue("");

    let history = useHistory();

    const goToAdminPage = () => history.replace("/admin");

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
                        <Button onClick={goToAdminPage}>ENTRAR</Button>
                    </ButtonLoginContainer>
                </ContentContainer>
            </LoginContainer>
        </LoginPageContainer>
    )
}

export default Login;