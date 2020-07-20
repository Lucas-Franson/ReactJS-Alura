import React, { Component, Fragment } from 'react';
import Header from './Header';
import DataTable from './DataTable';
import ApiService from './ApiService';
import PopUp from './PopUp';

class Autores extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nomes: [],
            titulo: 'Autores'
        };
    }

    componentDidMount() {
        ApiService.ListaNomes()
            .then(res => ApiService.TrataErros(res))
            .then(res => {
                if (res.message === "success") {
                    this.setState({ nomes: [...this.state.nomes, ...res.data] })
                    PopUp.exibeMensagem("Sucesso", "Autores listados com sucesso");
                }
            })
            .catch(err => PopUp.exibeMensagem("Error", "Falha na comunicação com a api ao listar os autores"));
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className='container'>
                    <h1>Página de Autores</h1>
                    <DataTable dados={this.state.nomes} titulo={this.state.titulo} colunas={['nome']} />
                </div>
            </Fragment>
        );
    }
}

export default Autores;