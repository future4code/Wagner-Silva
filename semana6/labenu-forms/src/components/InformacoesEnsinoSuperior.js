import React, { Component } from 'react';

import Botao from './Botao';
import ContainerFormulario from './Formulario';
import ContainerPerguntas from './ContainerPerguntas';
import Pergunta from './Pergunta';

export default class InformacoesEnsinoSuperior extends Component {
    constructor(props) {
        super(props);

        this.state = {
            valorInputCurso: '',
            valorInputUnidadeEnsino: ''
        }
    }

    onChangeCurso = (event) => {
        this.setState({
            valorInputCurso: event.target.value
        });
    }

    onChangeUnidadeEnsino = (event) => {
        this.setState({
            valorInputUnidadeEnsino: event.target.value
        });
    }

    render() {
        return (
            <ContainerFormulario tituloFormulario={`ETAPA ${this.props.etapa} - INFORMAÇÕES DO ENSINO SUPERIOR`}>
                <ContainerPerguntas>
                    <Pergunta
                        pergunta={"5- Qual curso ?"}
                        onChange={this.onChangeCurso}
                    />
                    <Pergunta
                        pergunta={"6- Qual unidade de ensino ?"}
                        onChange={this.onChangeUnidadeEnsino}
                    />
                </ContainerPerguntas>
                <Botao
                    onClick={this.props.proximaEtapa}
                    texto={"Prosseguir"}
                />
            </ContainerFormulario>
        );
    }
}