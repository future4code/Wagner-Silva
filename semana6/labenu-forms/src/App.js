import React, { Component } from 'react';
import styled from 'styled-components';

import DadosGerais from './components/DadosGerais';
import InformacoesEnsinoSuperior from './components/InformacoesEnsinoSuperior';
import InformacoesGeraisEnsino from './components/InformacoesGeraisEnsino';
import FormularioRespondido from './components/FormularioRespondido';


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

  onClickDadosGerais = () => {
    this.setState({
      idEtapa: 2,
      etapaAtual: "info-superior"
    });
  }

  onClickEnsinoSuperior = () => {
    this.setState({
      idEtapa: 2,
      etapaAtual: "info-gerais"
    });
  }

  onClickInformacoesGerais = () => {
    this.setState({
      etapaAtual: "finalizado"
    });
  }

  definePagina = () => {
    switch(this.setState.etapaAtual) {
      case "info-superior":
        return <InformacoesEnsinoSuperior etapa={this.state.idEtapa} proximaEtapa={this.onClickEnsinoSuperior}/>
      case "info-gerais":
        return <InformacoesGeraisEnsino etapa={this.state.idEtapa} finalizar={this.onClickInformacoesGerais}/>
      case "finalizado":
        return <FormularioRespondido />
      default:
        return <DadosGerais etapa={this.state.idEtapa} proximaEtapa={this.onClickDadosGerais}/>
    }
  }

  render() {
    return (
      <Container>
        {this.definePagina()}
      </Container>
    )
  }
}