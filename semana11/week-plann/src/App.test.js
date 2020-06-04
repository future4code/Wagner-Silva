import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import axios from 'axios';

axios.get = jest.fn().mockResolvedValue({ data: {} });
axios.post = jest.fn().mockResolvedValue();

describe("Renderização inicial", () => {
  test("Header existe na tela", () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('header')).toBeInTheDocument();
  });

  test("Input existe na tela", () => {
    const { getByPlaceholderText } = render(<App />);

    expect(getByPlaceholderText("Adicione uma tarefa")).toBeInTheDocument();
  });

  test("Select do dia da semana", () => {
    const { getByText } = render(<App />);

    expect(getByText("Escolha o dia da semana")).toBeInTheDocument();
  });

  test("Botão para adicionar tarefa", () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('add-task-button')).toBeInTheDocument();
  });

  test("Select filtro completas/pendentes", () => {
    const { getByText } = render(<App />);

    expect(getByText("Todas as tarefas")).toBeInTheDocument();
  });

  test("Planner presente na tela", () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('planner')).toBeInTheDocument();
  });

  test("Recebe dados de todas as tarefas cadastradas na API", async () => {
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

    const { findByText } = render(<App />);

    expect(axios.get).toHaveBeenCalled();
    expect(await findByText("Testar mocks")).toBeInTheDocument();
    expect(await findByText("Terminar projeto")).toBeInTheDocument();
  });
});

describe("Testes do header", async () => {
  test("Input funcionando corretamente", () => {
    const { getByPlaceholderText } = render(<App />);
    const input = getByPlaceholderText("Adicione uma tarefa");

    await userEvent.type(input, "testando input");

    expect(input).toHaveValue("testando input");
  });

  test("Select dia da semana funcionando corretamente", () => {
    const { getByLabelText, getByText } = render(<App />);

    const select = getByLabelText(/Dia da semana/);

    userEvent.selectOptions(select, getByText("Segunda"));

    expect(select).toHaveValue("Segunda");
  });

  test("Select filtro funcionando corretamente", () => {
    const { getByLabelText, getByText } = render(<App />);

    const select = getByLabelText(/Filtro/);

    userEvent.selectOptions(select, getByText("Completas"));

    expect(select).toHaveValue("Completas");
  });

  test("Botão que adiciona tarefa funcionando corretamente", () => {
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
    const addTaskButton = getByTestId('add-task-button');

    await userEvent.type(input, "testando input");
    expect(input).toHaveValue("testando input");

    userEvent.click(addTaskButton);

    expect(axios.get).toHaveBeenCalledTimes(2);
    expect(input).toHaveValue("");
    expect(getByText("testando input")).toBeInTheDocument();
  });
});

describe("Testes do planner", () => {
  test("Verifica se todos os dias da semana foram renderizados", () => {
    const { getByTestId, getByText } = render(<App />);

    const planner = getByTestId('planner');
    
    expect(planner).toBeInTheDocument();
    expect(getByText("Segunda")).toBeInTheDocument();
    expect(getByText("Terça")).toBeInTheDocument();
    expect(getByText("Quarta")).toBeInTheDocument();
    expect(getByText("Quinta")).toBeInTheDocument();
    expect(getByText("Sexta")).toBeInTheDocument();
    expect(getByText("Sábado")).toBeInTheDocument();
    expect(getByText("Domingo")).toBeInTheDocument();
  });

  test("Quando uma atividade é concluída", () => {});
  test("Quando uma atividade está pendente", () => {});
  test("Ao finalizar uma semana", () => {});
});