import React from 'react';
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import './assets/App.css'
import './assets/index.css'
import FormTeste from './components/FormCadastro/FormTeste';

function App() {
    return (
        <section>
            <FormTeste/>
            <ListaDeNotas/>
        </section>
    );
}

export default App;
