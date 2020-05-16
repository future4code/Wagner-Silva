import React, { useState } from 'react';
import DrawerMatchs from './DrawerMatchs';
import { Link } from 'react-router-dom';
import { Menu } from '@material-ui/icons';
import styled from 'styled-components';
import colors from '../../utils/colors';
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

const HeaderMatchContainerMobile = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
`

const LogoContainerMatchMobile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
`

const MenuContainerMatchMobile = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
`

const MenuIcon = styled(Menu)`
    color: ${colors.purple};
`

const MenuButton = styled.button`
    background-color: ${colors.white};
    width: 20%;
    height: 60%;
    border: none;
`

const LinkHomeLogo = styled(Link)`
    width: 5%;
    height: 75%;
    margin-left: ${props => props.center ? "none" : "30px"};

    @media (min-width: 320px) and (max-width: 420px) {
        width: 10%;
        height: 60%;
        margin-left: ${props => props.center ? "none" : "15px"};
    }
`

const Logo = styled.img`
    width: 100%;
    height: 100%;
`

const LogoCenter = styled.img`
    width: 100%;
    height: 100%;
`

const LinkLogin = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 10%;
    height: 50%;

    @media (min-width: 320px) and (max-width: 420px) {
        width: 20%;
    }
`

const LoginButton = styled.button`
    width: 100%;
    height: 100%;
    background-color: ${colors.white};
    color: ${colors.green};
    border: 1px solid ${colors.green};
    border-radius: 20px;
    text-align: center;
    margin-right: 30px;

    @media (min-width: 320px) and (max-width: 420px) {
        border-radius: 10px;
        font-size: 0.6em;
        margin-right: 15px;
    }
`

const Header = (props) => {
    const [ drawer, setDrawer ] = useState(false);

    const openDrawer = () => {
        setDrawer(true);
    }

    const closeDrawer = () => {
        setDrawer(false);
    }

    if(props.mobileMatchs) {
        return (
            <HeaderLogoContainer>
                <HeaderMatchContainerMobile>
                    <LogoContainerMatchMobile>
                        <LinkHomeLogo to={"/"} center={true}>
                            <LogoCenter src={logo} alt={"Logo AstroMatch"} />
                        </LinkHomeLogo>
                    </LogoContainerMatchMobile>
                    <MenuContainerMatchMobile>
                        <MenuButton onClick={openDrawer}>
                            <MenuIcon />
                        </MenuButton>
                        <DrawerMatchs open={drawer} close={closeDrawer} />
                    </MenuContainerMatchMobile>
                </HeaderMatchContainerMobile>
            </HeaderLogoContainer>
        )
    } else if(props.logoCenter) {
        return (
            <HeaderLogoContainer>
                <LinkHomeLogo to={"/"} center={true}>
                    <LogoCenter src={logo} alt={"Logo AstroMatch"} />
                </LinkHomeLogo>
            </HeaderLogoContainer>
        )
    } else {
        return (
            <HeaderHomeContainer>
                <LinkHomeLogo to={"/"}>
                    <Logo src={logo} alt={"Logo AstroMatch"} />
                </LinkHomeLogo>
                <LinkLogin to={"/login"}>
                    <LoginButton>LOGIN</LoginButton>
                </LinkLogin>
            </HeaderHomeContainer>
        )
    }
}

export default Header;