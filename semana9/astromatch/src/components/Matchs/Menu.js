import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import { Create, Favorite } from '@material-ui/icons';
import axios from 'axios';
import colors from '../../utils/colors';
import styled from 'styled-components';

const MenuContainer = styled.aside`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 10% 70% 20%;
    background-color: ${colors.white};
    color: ${colors.blackText};
    width: 20%;
    height: 90%;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const MenuHeader = styled.header`
    display: grid;
    grid-template-columns: 70% 15% 15%;
    justify-items: center;
    width: 100%;
    height: 100%;
    border-bottom: 2px solid ${colors.purple};
`

const User = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
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

const Edit = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%
`

const EditIcon = styled(Create)`
    color: ${colors.purple};
`
const MatchsNumberContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 0.5em;
`

const MatchsNumber = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${colors.blackText};
`

const MatchsIcon = styled(Favorite)`
    color: ${colors.purple};
`

const MatchsListContainer = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

const MatchsListTitleContainer = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    height: 15%;
`

const MatchItem = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    height: 15%;
    font-weight: 600;
`

const MenuFooter = styled.footer`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-top: 2px solid ${colors.purple};
`

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 90%;
    height: 100%;
`

const LinkExit = styled(Link)`
    width: 50%;
    height: 35%;
`

const FooterButton = styled.button`
    width: ${props => props.exit ? "100%" : "50%"};
    height: ${props => props.exit ? "100%" : "35%"};
    background-color: ${props => props.reset ? colors.purple : colors.white};
    color: ${props => props.reset ? colors.white : colors.purple};
    border: ${props => props.reset ? "none" : `1px solid ${colors.purple}`};
    border-radius: 5px;
    font-size: 0.75em;
    font-weight: 700;
    cursor: pointer;
`

const Menu = (props) => {
    const [ userInfo ] = JSON.parse(localStorage.getItem("users")).filter( account => {
            return account.id.toString() === localStorage.getItem("actualUser");
    })

    const matchsList = props.matchsList.filter( match => {
        return userInfo.matchs.indexOf(match.id) !== -1;
    }).map( matchUser => {
        console.log(matchUser)
        return (
            <MatchItem>
                <AvatarContainer>
                    <Avatar><img src={matchUser.photo} width={"20"} height={"20"}/></Avatar>
                    <p>{matchUser.name}</p>
                </AvatarContainer>
            </MatchItem>
        )
    })

    return (
        <MenuContainer>
            <MenuHeader>
                <User>
                    <AvatarContainer>
                        <Avatar>{userInfo.username[0]}</Avatar>
                        <p>{userInfo.username}</p>
                    </AvatarContainer>
                </User>
                <Edit>
                    <EditIcon />
                </Edit>
                <MatchsNumberContainer>
                    <MatchsNumber>
                        <MatchsIcon />
                        <p>{userInfo.matchs.length}</p>
                    </MatchsNumber>
                </MatchsNumberContainer>
            </MenuHeader>
            <MatchsListContainer>
                <MatchsListTitleContainer>
                    <h4>Matchs</h4>
                </MatchsListTitleContainer>
                {matchsList}
            </MatchsListContainer>
            <MenuFooter>
                <ButtonsContainer>
                    <FooterButton reset={true}>RESETAR MATCHS</FooterButton>
                    <LinkExit to={"/login"}>
                        <FooterButton exit={true} reset={false}>SAIR</FooterButton>
                    </LinkExit>
                </ButtonsContainer>
            </MenuFooter>
        </MenuContainer>
    )
}

export default Menu;