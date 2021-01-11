import React from 'react';
import './estilo.css'

const CardNota = () => {
    return (
        <section className='card-nota'>
            <header className='card-cabecalho'>
                <h3 className='card-titulo'>Título</h3>
            </header>
            <p className='card-texto'>Escreva sua nota</p>
        </section>
    )
}

export default CardNota;