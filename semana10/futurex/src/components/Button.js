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
`

const Button = (props) => {
    return <ButtonElement className={props.className}>{props.children}</ButtonElement>
}

export default Button;