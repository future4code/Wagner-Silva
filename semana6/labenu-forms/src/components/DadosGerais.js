import React, { Component } from 'react';
import styled from 'styled-components';

import Botao from './Botao';
import Pergunta from './Pergunta';


const ContainerFormulario = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 30%;
    height: 70%;
    border: 1px solid black;
`

const ContainerPerguntas = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`


export default class DadosGerais extends Component {
    constructor(props) {
        super(props);

        this.state = {
            valorInputNome: '',
            valorInputIdade: '',
            valorInputEmail: '',
            valorInputEscolaridade: ''
        }
    }

    onChangeNome = (event) => {
        this.setState({
            valorInputNome: event.target.value
        });
    }

    onChangeIdade = (event) => {
        this.setState({
            valorInputIdade: event.target.value
        });
    }

    onChangeEmail = (event) => {
        this.setState({
            valorInputEmail: event.target.value
        })
    }

    onChangeEscolaridade = (event) => {
        this.setState({
            valorInputEscolaridade: event.target.value
        })
    }

    render() {
        return (
            <ContainerFormulario>
                <h3>DADOS GERAIS</h3>
                <ContainerPerguntas>
                    <Pergunta 
                        pergunta={"1- Qual o seu nome ?"}
                        onChange={this.onChangeNome}
                    />
                    <Pergunta 
                        pergunta={"2- Qual a sua idade ?"}
                        onChange={this.onChangeIdade}
                    />
                    <Pergunta 
                        pergunta={"3- Qual o seu email ?"}
                        onChange={this.onChangeEmail}
                    />
                    <Pergunta 
                        pergunta={"4- Qual a sua escolaridade ?"}
                        tipo={"selecao"}
                        opcoes={[
                            "Ensino Médio Incompleto",
                            "Ensino Médio Completo",
                            "Ensino Superior Incompleto",
                            "Ensino Superior Completo"
                        ]}
                        valor={this.state.valorInputEscolaridade}
                        onChange={this.onChangeEscolaridade}
                    />
                </ContainerPerguntas>
                <Botao
                    onClick={this.props.proximaEtapa}
                    texto={"Prosseguir"}
                >
                </Botao>
            </ContainerFormulario>
        );
    }
}