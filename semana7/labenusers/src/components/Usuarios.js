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
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ContainerUsuario = styled.div`
    display: flex;
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
        this.listarUsuarios();
    }

    listarUsuarios = async () => {
        try {
            const listaDeUsuarios = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
                headers: {
                    Authorization: "wagner-cardoso-julian"
                }
            });
            this.setState({
                usuarios: listaDeUsuarios.data
            });
        } catch(error) {
            window.alert(`Erro na listagem dos usuários:${error}`);
        }


    }

    excluirUsuario = (usuarioId) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuarioId}`, {
            headers: {
                Authorization: 'wagner-cardoso-julian'
            }
        }).then((response) => {
            window.alert("Usuário excluído!");
            this.listarUsuarios()
        }).catch((error) => {
            window.alert(`Erro ao excluir usuário: ${error}`);
        })
    }

    render() {
        const listaDeUsuarios = this.state.usuarios.map( (usuario, index) => {
            return (
                <ContainerUsuario>
                    <li key={index}>{usuario.name}</li>
                    <button onClick={() => this.excluirUsuario(usuario.id)}>Apagar</button>
                </ContainerUsuario>
            )
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