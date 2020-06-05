import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Planner from './components/Planner';
import axios from 'axios';
import { baseUrl } from './utils/links';
import colors from './utils/colors';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${colors.backgroundBlue};
  width: 100vw;
  height: 100vh;
`

function App() {
  const [ tasks, setTasks ] = useState([]);

  const getTasks = async () => {
    axios
      .get(baseUrl)
      .then( response => setTasks(response.data))
      .catch(() => alert("Erro na obtenção dos dados"));
  }

  useEffect(() => {
    getTasks()
  }, [])

  return (
    <Container>
      <Header />
      <Planner />
    </Container>
  );
}

export default App;
