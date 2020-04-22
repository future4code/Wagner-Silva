import React, { Component } from "react";
import styled from "styled-components";

//import Tarefas from "./components/Tarefas";
import Tarefa from "./components/Tarefa";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerInput = styled.section`
  display: flex;
`;

export default class App extends Component {
  state = {
    valorInputTarefa: "",
    valorOpcao: "",
    tarefas: []
  };

  onChangeTarefa = event => {
    this.setState({
      valorInputTarefa: event.target.value
    });
  };

  adicionaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.valorInputTarefa,
      tarefaCompleta: false
    };

    const novoArrayTarefas = [...this.state.tarefas, novaTarefa];

    this.setState({
      tarefas: novoArrayTarefas
    });
  };

  onChangeOpcao = event => {
    this.setState({
      valorOpcao: event.target.value
    });
  };

  render() {
    let listaDeTarefas;
    switch (this.state.valorOpcao) {
      case "Pendentes":
        listaDeTarefas = this.state.tarefas.map(tarefa => {
          if (!tarefa.tarefaCompleta) {
            return (
              <Tarefa
                key={tarefa.id}
                texto={tarefa.texto}
                tarefaCompleta={tarefa.tarefaCompleta}
              />
            );
          }
        });
        break;
      case "Completas":
        listaDeTarefas = this.state.tarefas.map(tarefa => {
          if (tarefa.tarefaCompleta === true) {
            return (
              <Tarefa
                key={tarefa.id}
                texto={tarefa.texto}
                tarefaCompleta={tarefa.tarefaCompleta}
              />
            );
          }
        });
        break;
      default:
        listaDeTarefas = this.state.tarefas.map(tarefa => {
          return (
            <Tarefa
              key={tarefa.id}
              texto={tarefa.texto}
              tarefaCompleta={tarefa.tarefaCompleta}
            />
          );
        });
    }

    return (
      <Container>
        <h1>Lista de tarefas</h1>
        <ContainerInput>
          <input
            onChange={this.onChangeTarefa}
            value={this.setState.valorInputTarefa}
          />
          <button onClick={this.adicionaTarefa}>Adicionar</button>
        </ContainerInput>
        <div>
          <select value={this.state.valorOpcao} onChange={this.onChangeOpcao}>
            <option value={"Nenhum"}>Nenhum</option>
            <option value={"Pendentes"}>Pendentes</option>
            <option value={"Completas"}>Completas</option>
          </select>
        </div>
        {listaDeTarefas}
      </Container>
    );
  }
}
