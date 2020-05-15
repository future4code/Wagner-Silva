import React from 'react';
import { Avatar } from '@material-ui/core';
import { Create, Favorite } from '@material-ui/icons';
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

const FooterButton = styled.button`
    width: 50%;
    height: 35%;
    background-color: ${props => props.reset ? colors.purple : colors.white};
    color: ${props => props.reset ? colors.white : colors.purple};
    border: ${props => props.reset ? "none" : `1px solid ${colors.purple}`};
    border-radius: 5px;
    font-size: 0.75em;
    font-weight: 700;
`

const Menu = (props) => {
    if(props.visible) {
        return (
            <MenuContainer>
                <MenuHeader>
                    <User>
                        <AvatarContainer>
                            <Avatar>W</Avatar>
                            <p>Wagner</p>
                        </AvatarContainer>
                    </User>
                    <Edit>
                        <EditIcon />
                    </Edit>
                    <MatchsNumberContainer>
                        <MatchsNumber>
                            <MatchsIcon />
                            <p>12</p>
                        </MatchsNumber>
                    </MatchsNumberContainer>
                </MenuHeader>
                <MatchsListContainer>
                    <MatchsListTitleContainer>
                        <h4>Matchs</h4>
                    </MatchsListTitleContainer>
                    <MatchItem>
                        <AvatarContainer>
                            <Avatar>M</Avatar>
                            <p>Match 1</p>
                        </AvatarContainer>
                    </MatchItem>
                    <MatchItem>
                        <AvatarContainer>
                            <Avatar>M</Avatar>
                            <p>Match 2</p>
                        </AvatarContainer>
                    </MatchItem>
                    <MatchItem>
                        <AvatarContainer>
                            <Avatar>M</Avatar>
                            <p>Match 3</p>
                        </AvatarContainer>
                    </MatchItem>
                    <MatchItem>
                        <AvatarContainer>
                            <Avatar>M</Avatar>
                            <p>Match 4</p>
                        </AvatarContainer>
                    </MatchItem>
                </MatchsListContainer>
                <MenuFooter>
                    <ButtonsContainer>
                        <FooterButton reset={true}>RESETAR MATCHS</FooterButton>
                        <FooterButton reset={false}>SAIR</FooterButton>
                    </ButtonsContainer>
                </MenuFooter>
            </MenuContainer>
        )
    } else {
        return null;
    }
}

export default Menu;