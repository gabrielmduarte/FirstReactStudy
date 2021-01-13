import React from 'react';
import './estilo.css';

const ListaDeCategoria = (props) => {
    const handleEventInput = (e) => {
        if (e.key === "Enter") {
            props.onCreate(e.target.value)
        }
    }

    return (
        <section className="lista-categorias">
            <ul className="lista-categorias_lista">
                {props.categorias.map((cat, index) => {
                    return (<li className="lista-categorias_item" key={index}>{cat}</li>
                    )
                })}
            </ul>
            <input
                type="text"
                className="lista-categorias_input"
                placeholder="Adicionar categoria"
                onKeyUp={handleEventInput}
            />
        </section>
    );
}

export default ListaDeCategoria

