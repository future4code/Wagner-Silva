import React, { Component } from "react";

export default class Tarefa extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      texto: this.props.texto,
      tarefaCompleta: this.props.tarefaCompleta
    };
  }

  completarTarefa = () => {
    if (!this.state.tarefaCompleta) {
      this.setState({
        tarefaCompleta: true
      });
    }
  };

  render() {
    const elemento = !this.state.tarefaCompleta ? (
      <li onDoubleClick={this.completarTarefa}>{this.state.texto}</li>
    ) : (
      <li>
        <strike>{this.state.texto}</strike>
      </li>
    );

    return elemento;
  }
}
