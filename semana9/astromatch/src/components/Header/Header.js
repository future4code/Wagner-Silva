import React, { useState } from 'react';
import DrawerMatchs from './DrawerMatchs';
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
    width: 90%;
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
    background-color: ${colors.white};
    color: ${colors.green};
    border: 1px solid ${colors.green};
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
                        <LogoCenter src={logo} alt={"Logo AstroMatch"} />
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
                <LogoCenter src={logo} alt={"Logo AstroMatch"} />
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