import React from 'react';
import Menu from './Menu';
import { ArrowBack } from '@material-ui/icons';
import colors from '../../utils/colors';
import styled from 'styled-components';

const MenuMatchMobileContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 10% 90%;
    background-color: ${colors.white};
    color: ${colors.blackText};
    width: 100%;
    height: 100%;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const MenuMatchMobileHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const BackContainer = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    height: 100%;
`

const BackButton = styled.button`
    width: 20%;
    height: 50%;
    background-color: ${colors.white};
    border: none;
`

const BackIcon = styled(ArrowBack)`
    color: ${colors.purple};
`

const MenuMatchMobile = (props) => {
    return (
        <MenuMatchMobileContainer>
            <MenuMatchMobileHeader>
                <BackContainer>
                    <BackButton onClick={props.close}>
                        <BackIcon />
                    </BackButton>
                </BackContainer>
            </MenuMatchMobileHeader>
            <Menu matchsList={props.matchsList} />
        </MenuMatchMobileContainer>
    )
}

export default MenuMatchMobile;