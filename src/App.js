import React from 'react';
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import './assets/App.css'
import './assets/index.css'
import FormTeste from './components/FormCadastro/FormTeste';
import ListaDeCategoria from "./components/ListaDeCategoria/ListaDeCategoria";

function App() {

    const [notas, setNotas] = React.useState([]);
    const [categorias, setCategorias] = React.useState(["Trabalho", "Esportes"]);

    const criarNota = (titulo, texto) => {
        const novaNota = {titulo, texto};
        const novoArrayNotas = [...notas, novaNota]
        setNotas(novoArrayNotas)
    }

    const deleteCard = (index) => {
        const novoArray = notas.filter((nota, indice) => {
            return index !== indice
        });
        setNotas(novoArray);
    }

    const criarCategoria = texto => {
        const novoArrayCategorias = [...categorias, texto];
        setCategorias(novoArrayCategorias)
    }

    return (
        <section className='conteudo'>
            <FormTeste criarNota={criarNota}/>
            <main>
                <ListaDeNotas notas={notas} onDelete={deleteCard}/>
                <ListaDeCategoria categorias={categorias} onCreate={criarCategoria}/>
            </main>
        </section>
    );
}

export default App;
