import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerInput = styled.section`
  display: flex;
`;

export default class Tarefas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputTarefa: "",
      tarefas: []
    };
  }

  onChangeInputTarefa = event => {
    this.setState({
      inputTarefa: event.target.value
    });
  };

  adicionaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputTarefa,
      completa: false
    };

    const novoArrayTarefas = [...this.state.tarefas, novaTarefa];

    this.setState({
      tarefas: novoArrayTarefas
    });
  };

  completarTarefa = event => {
    const novoArrayTarefas = this.state.tarefas.map(tarefa => {
      return tarefa.id === event.target.key ? (tarefa.completa = true) : tarefa;
    });

    this.setState({
      tarefas: novoArrayTarefas
    });
  };

  render() {
    const listaDeTarefas = this.state.tarefas.map(tarefa => {
      return !tarefa.completa ? (
        <li key={tarefa.id} onDoubleClick={this.completarTarefa}>
          {tarefa.texto}
        </li>
      ) : (
        <li key={tarefa.id}>
          <strike>{tarefa.texto}</strike>
        </li>
      );
    });

    return (
      <Container>
        <h1>Lista de tarefas</h1>
        <ContainerInput>
          <input
            onChange={this.onChangeInputTarefa}
            value={this.setState.inputTarefa}
          />
          <button onClick={this.adicionaTarefa}>Adicionar</button>
        </ContainerInput>
        {listaDeTarefas}
      </Container>
    );
  }
}
