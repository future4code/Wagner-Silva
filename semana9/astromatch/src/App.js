import React from 'react';
import styled from 'styled-components';
import Routes from './routes';
import './App.css';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

function App() {
  return (
    <AppContainer>
      <Routes />
    </AppContainer>
  );
}

export default App;
