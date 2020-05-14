import React from 'react';
import styled from 'styled-components';

import Header from './components/Header/Header';

import './App.css';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

function App() {
  return (
    <AppContainer>
      <Header logo={true} />
    </AppContainer>
  );
}

export default App;
