import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const ContainerFormulario = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 30%;
  border: 1px solid black;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      acessibilidade: ["Alta", "Média", "Baixa"],
      preco: ["Alto", "Médio", "Baixo"],
      participantes: 0,
      tipo: ["Educação", "Recreativo", "Social", "Sozinh@", "Caridade",
              "Culinária", "Relaxante", "Música", "Trabalho duro"]
    }
  }
  render() {
    return (
      <Container>
        <ContainerFormulario>
          <label forHTML={"tipo"}>Tipo de atividade:</label>
          <select name={"tipo"}>
            {this.state.tipo.map( opcao => {
                return <option>{opcao}</option>
            })}
          </select>
          <label forHTML={"participantes"}>Número de participantes:</label>
          <input type={"number"} name={"participantes"} value={this.state.participantes} />
          <label forHTML={"acessibilidade"}>Acessibilidade</label>
          <select name={"acessibilidade"}>
            {this.state.acessibilidade.map( opcao => {
                return <option>{opcao}</option>
            })}
          </select>
          <label forHTML={"preco"}>Preço:</label>
          <select name={"preco"}>
            {this.state.preco.map( opcao => {
                return <option>{opcao}</option>
            })}
          </select>
        </ContainerFormulario>
      </Container>
    );
  }
}

export default App;
