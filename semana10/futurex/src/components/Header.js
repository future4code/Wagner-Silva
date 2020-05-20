import React from 'react';
import { useHistory } from 'react-router';
import colors from '../utils/colors';
import links from '../utils/links';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10%;
    position: relative;
`

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5%;
    height: 100%;
    position: absolute;
    z-index: 1;
`

const Logo = styled.img`
    width: 100%;
    height: 100%;
`

const ButtonLoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 90%;
    height: 100%;
`
const Button = styled.button`
    background: none;
    width: 10%;
    height: 50%;
    border: none;
    border-radius: 10px;
    color: ${colors.orangeLight};
    font-weight: bold;
    cursor: pointer;

    :hover {
        border: 1px solid ${colors.orangeLight};
    }

    :focus {
        outline: none;
    }
`

const Header = (props) => {
    let history = useHistory();

    const goToLoginPage = () => {
        history.push("/login")
    }

    return (
        <HeaderContainer>
            <LogoContainer>
                {props.logo ? <Logo src={links.logo} /> : null}
            </LogoContainer>
            {props.center ? null : <ButtonLoginContainer>
                                        {props.login ? <Button onClick={goToLoginPage}>LOGIN</Button> : <Button onClick={goToLoginPage}>SAIR</Button>}
                                    </ButtonLoginContainer>
            }
        </HeaderContainer>
    )
}

export default Header;