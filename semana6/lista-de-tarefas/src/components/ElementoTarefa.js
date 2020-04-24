import React, { Component } from 'react';
import styled from 'styled-components';

const ContainerTarefa = styled.div`
  display: flex;
`
export default class ElementoTarefa extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: this.props.key
    }
  }

  render() {
    return (
      <ContainerTarefa>
        <li key={this.state.key}>{this.props.texto}</li>
      </ContainerTarefa>
    )
  }
}