import React, { Component } from 'react';
import styled from 'styled-components';

import DadosGerais from './components/DadosGerais';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  text-align: center;
`

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idEtapa: 1,
      etapaAtual: "dados-gerais"
    }
  }
  render() {
    return (
      <Container>
        <DadosGerais />
      </Container>
    )
  }
}