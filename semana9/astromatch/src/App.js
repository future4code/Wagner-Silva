import React from 'react';
import styled from 'styled-components';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Matchs from './components/Matchs/Matchs';
import Register from './components/Register/Register';
import './App.css';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

function App() {
  return (
    <AppContainer>
      <Matchs />
    </AppContainer>
  );
}

export default App;
