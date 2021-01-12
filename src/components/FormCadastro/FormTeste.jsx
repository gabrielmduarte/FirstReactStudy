import React from 'react';
import './estilo.css'

const FormTeste = () => {
    return (
        <form>
            <input type="text" placeholder="Título"/>
            <textarea
            placeholder="Digite"/>
            <button>Criar Nota</button>
        </form>
    );
}

export default FormTeste;