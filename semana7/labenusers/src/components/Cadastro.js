import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 300px;
    height: 200px;
    border: 1px solid black;
`

const Input = styled.input`
    border: none;
    border-bottom: 1px solid black;
    width: 80%;
    height: 10%;
`

export default class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valorInputNome: "",
            valorInputEmail: ""
        }
    }

    onChangeName = (event) => {
        this.setState({
            valorInputNome: event.target.value
        });
    }

    onChangeEmail = (event) => {
        this.setState({
            valorInputEmail: event.target.value
        });
    }

    cadastrarUsuario = () => {
        const body = {
            name: this.state.valorInputNome,
            email: this.state.valorInputEmail
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
            headers: {
                Authorization: "wagner-cardoso-julian"
            }
        }).then((response) => {
            window.alert("Usuário salvo com sucesso!")
        }).catch((error) => {
            window.alert("Erro ao salvar um novo usuário")
        });
        this.setState({
            valorInputNome: "",
            valorInputEmail: ""
        })
    }

    render() {
        return (
            <Container>
                <Input
                    value={this.state.valorInputNome}
                    onChange={this.onChangeName}
                    placeholder={"Nome"}
                />
                <Input
                    value={this.state.valorInputEmail}
                    onChange={this.onChangeEmail}
                    placeholder={"Email"}
                />
                <button onClick={this.cadastrarUsuario}>Cadastrar</button>
            </Container>
        )
    }


}