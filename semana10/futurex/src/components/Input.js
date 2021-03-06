import React from 'react';
import colors from '../utils/colors';
import styled from 'styled-components';

const InputElement = styled.input`
    width: 100%;
    height: 30%;
    border: 1px solid ${colors.blackLight};
    border-radius: 5px;
`

const Input = (props) => {
    return (
        <InputElement type={props.type} value={props.value} pattern={props.pattern} min={props.min} onChange={props.onChange} required={props.required} />
    )
}

export default Input;