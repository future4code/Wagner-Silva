import React, { Component } from 'react';
import styled from 'styled-components';

const ContainerBotao = styled.button`
    width: 30%;
    height: 5%;
    background-color: blue;
    border-radius: 5px;
    color: white;
    border: none;
`

export default class Botao extends Component {
    render() {
        return <ContainerBotao onClick={this.props.onClick}>{this.props.texto}</ContainerBotao>;
    }
}