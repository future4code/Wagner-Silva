import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ContainerComPerguntas = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export default class ContainerPerguntas extends Component {
    render() {
        return (
            <Container>
                <ContainerComPerguntas>{this.props.children}</ContainerComPerguntas>
            </Container>
        )
    }
}