import React from 'react';
import Container from '../Container/Container';
import Content from '../Content/Content';
import Header from '../Header/Header';
import { Avatar } from '@material-ui/core';
import { Favorite } from '@material-ui/icons';
import styled from 'styled-components';

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
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 25%;
    height: 70%;
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #3E3737;

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

const Account = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 20%;
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
    color: #3E3737;
`

const FavoriteIcon = styled(Favorite)`
    color: #3E1790;
`

const CreateAccountButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 80%;
    height: 15%;
`

const CreateAccountButton = styled.button`
    background: #2C8234;
    border: none;
    border-radius: 10px;
    color: #FFFFFF;
    font-weight: bold;
    width: 40%;
    height: 50%;
`

const MatchsButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 15%;
`

const MatchsButton = styled.button`
    background: #4B19B8;
    width: 15%;
    height: 50%;
    border: 2px solid #FFFFFF;
    border-radius: 15px;
    font-size: 1em;
    font-weight: bold;
    color: #FFFFFF;

    @media (min-width: 320px) and (max-width: 420px) {
        width: 50%;
        height: 45%;
        font-size: 0.7em;
    }
`

const Login = () => {
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
                        <Account>
                            <AvatarContainer>
                                <Avatar>W</Avatar>
                                <p>Wagner</p>
                            </AvatarContainer>
                            <MatchContainer>
                                <Matchs>
                                    <FavoriteIcon />
                                    <p>12</p>
                                </Matchs>
                            </MatchContainer>
                        </Account>
                        <Account>
                            <AvatarContainer>
                                <Avatar>J</Avatar>
                                <p>Janny</p>
                            </AvatarContainer>
                            <MatchContainer>
                                <Matchs>
                                    <FavoriteIcon />
                                    <p>12</p>
                                </Matchs>
                            </MatchContainer>
                        </Account>
                    </AccountsListContainer>
                    <CreateAccountButtonContainer>
                        <CreateAccountButton>Criar conta</CreateAccountButton>
                    </CreateAccountButtonContainer>
                </AccountsContainer>
                <MatchsButtonContainer>
                    <MatchsButton>DAR MATCHS</MatchsButton>
                </MatchsButtonContainer>
            </LoginContent>
        </Container>
    )
}

export default Login;