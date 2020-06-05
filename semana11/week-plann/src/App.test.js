import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event';
import App from './App';
import axios from 'axios';
import { baseUrl } from './utils/links';

axios.get = jest.fn().mockResolvedValue({ data: {} });
axios.post = jest.fn().mockResolvedValue();

describe("Renderização inicial", () => {
  test("Renderizações funcionando corretamente", () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          id: Date.now(),
          text: "Testar mocks",
          day: "Quinta",
          completed: true
      },
      {
        id: Date.now(),
        text: "Terminar projeto",
        day: "Sexta",
        completed: false
      }
      ]
    });

    const { getByPlaceholderText, getByTestId, getByText } = render(<App />);
  
    expect(getByTestId('header')).toBeInTheDocument();
    expect(getByPlaceholderText("Adicione uma tarefa")).toBeInTheDocument();
    expect(getByText("Escolha o dia da semana")).toBeInTheDocument();
    expect(getByText("Todas as tarefas")).toBeInTheDocument();
    expect(getByTestId('add-task-button')).toBeInTheDocument();
    expect(getByTestId('planner')).toBeInTheDocument();
    expect(axios.get).toHaveBeenCalled();
    
  })


});

describe("Testes do header", () => {
  test("Todos elementos do header funcionando corretamente", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          id: Date.now(),
          text: "Testando mocks",
          day: "Quinta",
          completed: true
        }
      ]
    });
    
    axios.post = jest.fn().mockResolvedValue();

    const { getByPlaceholderText, getByTestId, getByText } = render(<App />);
    const input = getByPlaceholderText("Adicione uma tarefa");

    fireEvent.change(input, {
      target: {
        value: "testando input"
      }
    })
    
    expect(input).toHaveValue("testando input");

    const selectDay = getByText("Escolha o dia da semana");
    
    fireEvent.change(selectDay, {
      target: {
        value: "Segunda"
      }
    });
    
    expect(selectDay).toHaveValue("Segunda");
    
    const selectFilter = getByText(/Todas as tarefas/);
    
    fireEvent.change(selectFilter, {
      target: {
        value: "Completas"
      }
    });
    
    expect(selectFilter).toHaveValue("Completas");

    const addTaskButton = getByTestId('add-task-button');
  
    fireEvent.change(input, {
      target: {
        value: "criando nova tarefa"
      }
    });
  
    fireEvent.change(selectDay, {
      target: {
        value: "Quinta"
      }
    });
  
    //userEvent.selectOptions(select, getByText(/Quinta/));
  
    expect(selectDay).toHaveValue("Quinta");

    fireEvent.click(addTaskButton);

    
  
    // expect(input).toHaveValue("");
    // expect(getByText("testando input")).toBeInTheDocument();
    //await wait(() => expect(axios.get).toHaveBeenCalledTimes(2));
    expect(axios.post).toHaveBeenCalledWith(baseUrl, {
      text: "criando nova tarefa",
      day: "Quinta",
      completed: false
    });
  });
});

describe("Testes do planner", () => {
  test("Verifica se todos os dias da semana foram renderizados", () => {
    const { getByTestId, getAllByText } = render(<App />);

    const planner = getByTestId('planner');
    
    expect(planner).toBeInTheDocument();
    expect(getAllByText("Segunda")).toHaveLength(2);
    expect(getAllByText("Terça")).toHaveLength(2);
    expect(getAllByText("Quarta")).toHaveLength(2);
    expect(getAllByText("Quinta")).toHaveLength(2);
    expect(getAllByText("Sexta")).toHaveLength(2);
    expect(getAllByText("Sábado")).toHaveLength(2);
    expect(getAllByText("Domingo")).toHaveLength(2);
  });

  test("Quando uma atividade é concluída", () => {});
  test("Quando uma atividade está pendente", () => {});
  test("Ao finalizar uma semana", () => {});
});