import React from 'react';
import { useHistory } from 'react-router';
import Button from '../components/Button';
import ButtonRegisterContainer from '../components/ButtonContainer';
import Content from '../components/ContentContainer';
import ContentHeader from '../components/ContentHeader';
import FormContainer from '../components/FormContainer';
import Input from '../components/Input';
import InputContainer from '../components/InputContainer';
import Header from '../components/Header';
import RegisterPageContainer from '../components/PageContainer';
import RegisterContainer from '../components/MainContainer';
import useInputValue from '../hooks/useInputValue';
import useChangeTitle from '../hooks/useChangeTitle';
import styled from 'styled-components';


const ContentContainer = styled(Content)`
    width: 30%;
    height: 80%;
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