import React, { Component } from 'react';

import logoFacebook from '../../img/facebook.svg'
import logoInstagram from '../../img/instagram.svg'
import logoTwitter from '../../img/twitter.svg'

import './SecaoCompartilhar.css';

export class SecaoCompartilhar extends Component {
    state = {
        mensagem: '',
        redeSocial: ''
    };

    onChangeMensagem = (event) => {
        this.setState({
            mensagem: event.target.value
        });
    }

    onClickRedeSocial = (event) => {
        this.setState({
            redeSocial: event.target.className
        })
    }

    compartilhar = () => {
        if(this.state.redeSocial !== '' && this.state.mensagem !== '') {
            console.log(`Post compartilhado no ${this.state.redeSocial} com a mensagem: ${this.state.mensagem}`);
            this.limparInput();
        }
    }

    limparInput = () => {
        this.setState({
            mensagem: ''
        });
    }

    render() {
        return (
            <div className={'share-container'}>
                <div className={'redes-sociais'}>
                    <img className={'Facebook'} src={logoFacebook} alt={'Logo Facebook'} onClick={this.onClickRedeSocial} />
                    <img className={'Instagram'} src={logoInstagram} alt={'Logo Instagram'} onClick={this.onClickRedeSocial} />
                    <img className={'Twitter'}src={logoTwitter} alt={'Logo Twitter'} onClick={this.onClickRedeSocial} />
                </div>
                <div className={'mensagem'}>
                    <input
                        className={'input-compartilhamento'}
                        placeholder={'Digite sua mensagem de compartilhamento'}
                        value={this.state.mensagem}
                        onChange={this.onChangeMensagem}
                    />
                    <button onClick={this.compartilhar}>Enviar</button>
                </div>
            </div>
        )
    }
}