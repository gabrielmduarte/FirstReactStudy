import React from 'react';
import './estilo.css';
import CardNota from "../CardNota/CardNota";

const ListaDeNotas = () => {
    return (
        <ul>{Array.of("Teste 1", "Teste 2", "Teste 3").map((string, index) => {
            return (
                <li key={index}>
                    <div className='titulo-nota'>{string}</div>
                    <CardNota/>
                </li>
            )
        })}</ul>
    )
}

export default ListaDeNotas;