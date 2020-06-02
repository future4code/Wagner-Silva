import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import App from "./App";

describe("Renderização inicial", () => {
    test("Input existe na tela", () => {
        const { getByPlaceholderText } = render(<App />);

        expect(getByPlaceholderText("Novo post")).toBeInTheDocument();
    });

    test("Botão existe na tela", () => {
        const { getByText } = render(<App />);
        const addPostButton = getByText(/Adicionar/i);

        expect(addPostButton).toBeInTheDocument();
    });
});

describe("Criar um post", () => {
    test("O post deve aparecer na tela com o mesmo texto do input", () => {
        const { getByPlaceholderText, getByText } = render(<App />);

        const input = getByPlaceholderText("Novo post");
        const addPostButton = getByText(/Adicionar/i);

        fireEvent.change(input, {
            target: {
                value: 'post teste'
            }
        });

        fireEvent.click(addPostButton);

        expect(getByText('post teste')).toBeInTheDocument();
    })
})

describe("Funcionalidade de curtir/descurtir", () => {
    test("Curtindo um post", () => {
        const { getByPlaceholderText, getByTestId, getByText } = render(<App />);
        const input = getByPlaceholderText("Novo post");
        const addPostButton = getByText(/Adicionar/i);

        fireEvent.change(input, {
            target: {
                value: 'post teste'
            }
        });

        fireEvent.click(addPostButton);

        const likeButton = getByTestId('like-button');

        fireEvent.click(likeButton);

        expect(likeButton).toHaveTextContent("Descurtir");
    });

    test("Descurtindo um post", () => {
        const { getByPlaceholderText, getByTestId, getByText } = render(<App />);
        const input = getByPlaceholderText("Novo post");
        const addPostButton = getByText(/Adicionar/i);

        fireEvent.change(input, {
            target: {
                value: 'post teste'
            }
        });

        fireEvent.click(addPostButton);

        const likeButton = getByTestId('like-button');

        fireEvent.click(likeButton);
        fireEvent.click(likeButton);

        expect(likeButton).toHaveTextContent("Curtir");
    });
});

describe("Testando demais funcionalidades", () => {
    test("Apagando um post", () => {
        const { getByPlaceholderText, getAllByText, getByText } = render(<App />);
        const input = getByPlaceholderText("Novo post");
        const addPostButton = getByText(/Adicionar/i);
        
        fireEvent.change(input, {
            target: {
                value: 'post teste'
            }
        });
        
        fireEvent.click(addPostButton);

        fireEvent.change(input, {
            target: {
                value: 'post teste 2'
            }
        });
        
        fireEvent.click(addPostButton);

        const deletePostButton = getAllByText(/Apagar/i);
        const postsNumbers = deletePostButton.length;
       
        fireEvent.click(deletePostButton[0]);

        expect(getAllByText(/Apagar/i)).toHaveLength(postsNumbers - 1);
    });

    test("Limpando o input após um post ser adicionado", () => {
        const { getByPlaceholderText, getByText } = render(<App />);

        const input = getByPlaceholderText("Novo post");
        const addPostButton = getByText(/Adicionar/i);

        fireEvent.change(input, {
            target: {
                value: 'post teste'
            }
        });

        fireEvent.click(addPostButton);

        expect(input).toHaveValue('');
    });

    test("Quando não houver posts, a mensagem 'Nenhum post' deve aparecer na tela", () => {
        const { getAllByTestId, getByText } = render(<App />);
        try {
            getAllByTestId('like-button');
        } catch {
            expect(getByText('Nenhum post')).toBeInTheDocument();
        }
    });

    test("Quantidade de posts", () => {
        const { getByPlaceholderText, getByText } = render(<App />);

        const input = getByPlaceholderText("Novo post");
        const addPostButton = getByText(/Adicionar/i);

        fireEvent.change(input, {
            target: {
                value: 'post teste'
            }
        });

        fireEvent.click(addPostButton);

        expect(getByText(/Quantidade de posts:/)).toBeInTheDocument();
    });

    test("Tentativa de criar post com texto vazio", () => {
        const { getByText } = render(<App />);

        const addPostButton = getByText('Adicionar');

        fireEvent.click(addPostButton);

        expect(getByText("Digite um texto para o post")).toBeInTheDocument();
    });
});