import React from 'react';
import './estilo.css'
import deleteSVG from '../../assets/img/delete.svg'

const CardNota = (props) => {

    return (
        <section className="card-nota">
            <header className="card-nota_cabecalho">
                <h3 className="card-nota_titulo">{props.titulo}</h3>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img src={deleteSVG} onClick={() => props.onDelete(props.index)}/>
            </header>
            <p className="card-nota_texto">{props.texto}</p>
            <p className="card-nota_texto">{props.categoria}</p>
        </section>
    );
}

export default CardNota;
