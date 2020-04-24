import React, { Component } from 'react';
import styled from 'styled-components';

const ContainerPergunta = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 50%;
    height: 10%;
`


export default class InputPergunta extends Component {
    render() {
        return (
            <ContainerPergunta>
                <p>{this.props.pergunta}</p>
                {this.props.tipo && this.props.tipo === "selecao" ?
                    <select value={this.props.valor} onChange={this.props.onChange}>
                        {this.props.opcoes.map((opcao, index) => {
                            return <option key={index} value={opcao}>{opcao}</option> 
                        })}
                    </select> :
                    <input onChange={this.props.onChange} />
                }
            </ContainerPergunta>
        )
    }
}