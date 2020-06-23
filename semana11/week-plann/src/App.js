import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Planner from './components/Planner';
import axios from 'axios';
import { baseUrl } from './utils/links';
import colors from './utils/colors';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${colors.backgroundBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

function App() {
  const [ tasks, setTasks ] = useState([]);
  const [ taskInput, setTaskInput ] = useState("");
  const [ taskDay, setTaskDay ] = useState("");
  const [ filter, setFilter ] = useState("");

  const onChangeTaskInput = (event) => {
    setTaskInput(event.target.value);
  }

  const onChangeTaskDay = (event) => {
    setTaskDay(event.target.value);
  }

  const onChangeFilter = (event) => {
    setFilter(event.target.value);
  }

  const addTask = () => {
    const task = {
      text: taskInput,
      day: taskDay,
      completed: false
    };

    axios.post(baseUrl, task);
    setTaskInput("");
  }
  
  useEffect(() => {
    axios
      .get(baseUrl)
      .then( response => setTasks(response.data))
      .catch(() => alert("Erro na obtenção dos dados"))
  }, [])
  return (
    <Container>
      <Header
        taskText={taskInput}
        onChangeTaskText={onChangeTaskInput}
        weekDay={taskDay}
        onChangeWeekDay={onChangeTaskDay}
        filterValue={filter}
        onChangeFilterValue={onChangeFilter}
        addTask={addTask}
      />
      <Planner tasks={tasks} />
    </Container>
  );
}

export default App;
