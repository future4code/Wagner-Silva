import React from 'react';
import styled from 'styled-components';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import './App.css';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

function App() {
  return (
    <AppContainer>
      <Login />
    </AppContainer>
  );
}

export default App;
