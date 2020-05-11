import React, { Component } from 'react';
import styled from 'styled-components';

import Cadastro from './components/Cadastro';
import Usuarios from './components/Usuarios';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const BotaoListarUsuarios = styled.button`
  align-self: flex-start;
`

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      vendoUsuarios: false
    }
  }

  trocarPagina = () => {
    this.setState({
      vendoUsuarios: !this.state.vendoUsuarios
    });
  }

  render() {
    return (
      <Container>
        <BotaoListarUsuarios onClick={this.trocarPagina}>
          {!this.state.vendoUsuarios ? "Listar Usuários" : "Voltar"}
        </BotaoListarUsuarios>
        
        {!this.state.vendoUsuarios ? <Cadastro /> : <Usuarios />}
      </Container>
    );
  }
}

export default App;
