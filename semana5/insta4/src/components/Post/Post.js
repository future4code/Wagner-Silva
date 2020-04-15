import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconePostBranco from '../../img/not-save.svg'
import iconePostPreto from '../../img/save.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeCompartilhar from '../../img/share.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import { SecaoCompartilhar } from '../SecaoCompartilhar/SecaoCompartilhar'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    compartilhando: false
  }

  onClickCurtida = () => {
    let alteracaoCurtida;
    if(this.state.curtido) {
      alteracaoCurtida = -1;
    } else {
      alteracaoCurtida = 1;
    }
    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: this.state.numeroCurtidas + alteracaoCurtida
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    });
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhando: !this.state.compartilhando
    });
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickSalvar = () => {
    this.setState({
      salvo: !this.state.salvo
    });

    if(!this.state.salvo) {
      console.log("Post salvo!");
    }
  }

  render() {
    let iconeCurtida
    let iconeSalvar

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    if(this.state.salvo) {
      iconeSalvar = iconePostPreto;
    } else {
      iconeSalvar = iconePostBranco;
    }

    let componenteComentario
    let componenteCompartilhamento

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    if(this.state.compartilhando) {
      componenteCompartilhamento = <SecaoCompartilhar />
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <div className={'user'}>
          <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
          <p>{this.props.nomeUsuario}</p>
        </div>
        <div className={'save'}>
          <img src={iconeSalvar} alt={'Imagem para salvar post.'} onClick={this.onClickSalvar} />
        </div>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
        <div className={'compartilhar'}>
          <img src={iconeCompartilhar} alt="Imagem para compartilhar" onClick={this.onClickCompartilhar}/>
        </div>
      </div>
      {componenteComentario}
      {componenteCompartilhamento}
    </div>
  }
}

export default Post