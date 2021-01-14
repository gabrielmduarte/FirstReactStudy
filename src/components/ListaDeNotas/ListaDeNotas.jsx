import React from 'react';
import './estilo.css';
import CardNota from "../CardNota/CardNota";

const ListaDeNotas = (props) => {
    return (
        <ul className="lista-notas">
            {props.notas.map((nota, index) => {
                return (
                    <li className="lista-notas_item" key={index}>
                        <CardNota
                            index={index}
                            titulo={nota.titulo}
                            texto={nota.texto}
                            categoria={nota.categoria}
                            onDelete={props.onDelete}/>
                    </li>
                );
            })}
        </ul>
    );
}

export default ListaDeNotas;
