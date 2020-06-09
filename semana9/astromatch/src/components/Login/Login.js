import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import Content from '../Content/Content';
import Header from '../Header/Header';
import { Avatar } from '@material-ui/core';
import { Favorite } from '@material-ui/icons';
import styled from 'styled-components';
import colors from '../../utils/colors';

const LoginContent = styled(Content)`
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
    height: 15%;

    @media (min-width: 320px) and (max-width: 420px) {
        width: 60%;
        height: 15%;
        font-size: 0.7em;
    }
`

const AccountsContainer = styled.div`
    background-color: ${colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 25%;
    height: 70%;
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: ${colors.blackText};

    @media (min-width: 320px) and (max-width: 420px) {
        width: 80%;
    }
`

const AccountsTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 15%;

    @media (min-width: 320px) and (max-width: 420px) {
        font-size: 0.7em;
    }
`

const AccountsListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 70%;
`

const LinkAccount = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10%;
    text-decoration: none;
    color: ${colors.blackText};
`

const Account = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    font-weight: 600;
`

const AvatarContainer = styled.div`
    display: flex;
    align-items: center;
    width: 70%;
    height: 100%;

    @media (min-width: 320px) and (max-width: 420px) {
        font-size: 0.75em;
    }
`

const MatchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 30%;
    height: 100%;
    font-size: 0.5em;
    text-align: center;
`

const Matchs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${colors.blackText};
`

const FavoriteIcon = styled(Favorite)`
    color: ${colors.purple};
`

const CreateAccountButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 80%;
    height: 15%;
`
const LinkCreateAccount = styled(Link)`
    width: 40%;
    height: 50%;
`

const CreateAccountButton = styled.button`
    background: ${colors.green};
    border: none;
    border-radius: 10px;
    color: ${colors.white};
    font-weight: bold;
    width: 100%;
    height: 100%;
    cursor: pointer;
`

const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 15%;
`

const Login = () => {
    const chooseUser = (id) => {
        localStorage.setItem("actualUser", id);
    }

    const accountsList = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")).map( account => {
        return (
            <LinkAccount to={"/matchs"} onClick={() => chooseUser(account.id)}>
                <Account>
                    <AvatarContainer>
                        <Avatar>{account.username[0]}</Avatar>
                        <p>{account.username}</p>
                    </AvatarContainer>
                    <MatchContainer>
                        <Matchs>
                            <FavoriteIcon />
                            <p>{account.matchs.length}</p>
                        </Matchs>
                    </MatchContainer>
                </Account>
            </LinkAccount>
        )
        }) : undefined;
    
    return (
        <Container>
            <Header logoCenter={true} />
            <LoginContent>
                <TextContainer>
                    <h1>LOGIN</h1>
                </TextContainer>
                <AccountsContainer>
                    <AccountsTitleContainer>
                        <h4>CONTAS SALVAS</h4>
                    </AccountsTitleContainer>
                    <AccountsListContainer>
                        {accountsList}
                    </AccountsListContainer>
                    <CreateAccountButtonContainer>
                        <LinkCreateAccount to={"/register"}>
                            <CreateAccountButton>Criar conta</CreateAccountButton>
                        </LinkCreateAccount>
                    </CreateAccountButtonContainer>
                </AccountsContainer>
                <MessageContainer>
                    <h3>Conheça seu amor!</h3>
                </MessageContainer>
            </LoginContent>
        </Container>
    )
}

export default Login;