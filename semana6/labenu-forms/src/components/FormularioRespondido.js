import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  text-align: center;
`


export default class FormularioRespondido extends Component {
    render() {
        return (
            <Container>
                <h1>O FORMULÁRIO ACABOU</h1>
                <p>Muito obrigado por participar! Em breve entraremos em contato.</p>
            </Container>
        )
    }
}