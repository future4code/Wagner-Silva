import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/astromatch.svg';


const HeaderHomeContainer = styled.header`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const HeaderLogoContainer = styled.header`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Logo = styled.img`
    width: 5%;
    height: 75%;
    margin-left: 30px;
`

const BotaoLogin = styled.button`
    width: 10%;
    height: 50%;
    background-color: #FFFFFF;
    color: #2C8234;
    border: 1px solid #2C8234;
    border-radius: 10px;
    margin-right: 30px;
`

const Header = (props) => {
    if(props.logo) {
        return (
            <HeaderLogoContainer>
                <Logo src={logo} alt={"Logo Astromatch"} />
            </HeaderLogoContainer>
        )
    } else {
        return (
            <HeaderHomeContainer>
                <Logo src={logo} alt={"Logo Astromatch"} />
                <BotaoLogin>LOGIN</BotaoLogin>
            </HeaderHomeContainer>
        )
    }
}

export default Header;