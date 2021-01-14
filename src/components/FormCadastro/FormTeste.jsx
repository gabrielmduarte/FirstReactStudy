import React from 'react';
import './estilo.css'

const FormTeste = (props) => {

    const [titulo, setTitulo] = React.useState('');
    const [texto, setTexto] = React.useState('');
    const [categoria, setCategoria] = React.useState('')

    const _criaNota = (evento) => {
        evento.preventDefault();
        evento.stopPropagation();
        props.criarNota(titulo, texto, categoria)
    }

    return (
        <form className="form-cadastro"
              onSubmit={_criaNota}>
            <select
                className="form-cadastro_input"
                onChange={evento => setCategoria(evento.target.value)}
            >
                {props.categorias.map(cat => {
                    return <option>{cat}</option>;
                })}
            </select>
            <input
                type="text"
                placeholder="Título"
                className="form-cadastro_input"
                onChange={evento => setTitulo(evento.target.value)}
            />
            <textarea
                rows={15}
                placeholder="Escreva sua nota..."
                className="form-cadastro_input"
                onChange={evento => setTexto(evento.target.value)}
            />
            <button className="form-cadastro_input form-cadastro_submit">
                Criar Nota
            </button>
        </form>
    );
}

export default FormTeste;
