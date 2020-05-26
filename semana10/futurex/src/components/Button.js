import React from 'react';
import colors from '../utils/colors';
import styled from 'styled-components';

const ButtonElement = styled.button`
    background-color: ${colors.blackLight};
    width: 30%;
    height: 50%;
    border: 1px solid ${colors.orangeDark};
    border-radius: 20px;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    color: ${colors.white};
    cursor: pointer;
    outline: none;

    @media (min-width: 320px) and (max-width: 420px) {
        width: 45%;
        border-radius: 15px;
        font-size: 1em;
    }

    @media (min-width: 421px) and (max-width: 800px) {
        width: 40%;
        font-size: 1em;
    }
`

const Button = (props) => {
    return <ButtonElement className={props.className} onClick={props.onClick}>{props.children}</ButtonElement>
}

export default Button;