import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const ContainerLista = styled.main`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default class Usuarios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: []
        }
    }

    componentDidMount() {
        const listaDeUsuarios = axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
            headers: {
                Authorization: "wagner-cardoso-julian"
            }
        });

        listaDeUsuarios.then((response) => {
            this.setState({
                usuarios: response.data
            });
        }).catch((error) => {
            console.log(error);
            window.alert("Erro na listagem de usuários");
        })
    }

    render() {
        const listaDeUsuarios = this.state.usuarios.map( (usuario, index) => {
            return <li key={index}>{usuario.name}</li>
        });

        return (
            <Container>
                <h1>Usuários cadastrados</h1>
                <ContainerLista>
                    {listaDeUsuarios}
                </ContainerLista>
            </Container>
        )
    }
}