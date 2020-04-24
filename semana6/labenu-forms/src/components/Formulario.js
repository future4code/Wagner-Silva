import React, { Component } from 'react';
import styled from 'styled-components';

const ContainerFormulario = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 30%;
    height: 70%;
    border: 1px solid black;
`


export default class Formulario extends Component {
    render() {
        return (
            <ContainerFormulario>
                <h3>{this.props.tituloFormulario}</h3>
                {this.props.children}
            </ContainerFormulario>
        );

    }
}