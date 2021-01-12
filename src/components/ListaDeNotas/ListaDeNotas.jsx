import React from 'react';
import './estilo.css';
import CardNota from "../CardNota/CardNota";

const ListaDeNotas = () => {
        return (
          <ul className="lista-notas">
            {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
              return (
                <li className="lista-notas_item" key={index}>
                  <CardNota />
                </li>
              );
            })}
          </ul>
        );
}

export default ListaDeNotas;