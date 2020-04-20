import React, { Component } from 'react';

import Botao from './Botao';
import ContainerFormulario from './Formulario';
import ContainerPerguntas from './ContainerPerguntas';
import Pergunta from './Pergunta';

export default class InformacoesGeraisEnsino extends Component {
    constructor(props) {
        super(props);

        this.state = {
            valorInputMotivo: '',
            valorCursoComplementar: '',
        }
    }

    onChangeMotivo = (event) => {
        this.setState({
            valorInputMotivo: event.target.value
        });
    }

    onChangeCursoComplementar = (event) => {
        this.setState({
            valorCursoComplementar: event.target.value
        });
    }

    render() {
        return (
            <ContainerFormulario tituloFormulario={`Etapa ${this.props.etapa} - INFORMAÇÕES GERAIS DE ENSINO`}>
                <ContainerPerguntas>
                    <Pergunta
                        pergunta={"5- Por que você não terminou um curso de graduação ?"}
                        onChange={this.onChangeMotivo}
                    />
                    <Pergunta
                        pergunta={"6- Você fez algum curso complementar ?"}
                        tipo={"selecao"}
                        opcoes={[
                            "Nenhum",
                            "Curso Técnico",
                            "Curso de Inglês"
                        ]}
                        valor={this.state.valorCursoComplementar}
                        onChange={this.onChangeCursoComplementar}
                    />
                </ContainerPerguntas>
                <Botao
                    onClick={this.props.finalizar}
                    texto={"Finalizar"}
                />
            </ContainerFormulario>
        )
    }
}