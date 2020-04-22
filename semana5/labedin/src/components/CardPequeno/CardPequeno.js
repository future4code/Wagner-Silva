import React from 'react';
import './CardPequeno.css';

function CardPequeno(props) {
    return (
        <div className={ "littlecard-container" }>
            <img src={ props.imagem } alt="Imagem do Card Pequeno" />
            <h4>{ props.nome }</h4>
            <p>{ props.texto }</p>
        </div>
    );
}

export default CardPequeno;