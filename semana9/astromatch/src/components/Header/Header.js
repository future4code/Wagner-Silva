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

    @media (min-width: 320px) and (max-width: 420px) {
        width: 10%;
        height: 60%;
        margin-left: 15px;
    }
`

const LogoCenter = styled.img`
    width: 5%;
    height: 75%;

    @media (min-width: 320px) and (max-width: 420px) {
        width: 10%;
        height: 60%;
    }
`

const LoginButton = styled.button`
    width: 10%;
    height: 50%;
    background-color: #FFFFFF;
    color: #2C8234;
    border: 1px solid #2C8234;
    border-radius: 20px;
    text-align: center;
    margin-right: 30px;

    @media (min-width: 320px) and (max-width: 420px) {
        width: 15%;
        border-radius: 10px;
        font-size: 0.6em;
        margin-right: 15px;
    }
`

const Header = (props) => {
    if(props.logoCenter) {
        return (
            <HeaderLogoContainer>
                <LogoCenter src={logo} alt={"Logo Astromatch"} />
            </HeaderLogoContainer>
        )
    } else {
        return (
            <HeaderHomeContainer>
                <Logo src={logo} alt={"Logo Astromatch"} />
                <LoginButton>LOGIN</LoginButton>
            </HeaderHomeContainer>
        )
    }
}

export default Header;