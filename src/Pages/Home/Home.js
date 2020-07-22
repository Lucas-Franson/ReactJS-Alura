import React, { Component, Fragment } from 'react';
import './Home.css';
import Tabela from '../../Components/Tabela/Tabela';
import 'materialize-css/dist/css/materialize.min.css';
import PopUp from '../../Utils/PopUp';
import ApiService from '../../Utils/ApiService';

import Header from '../../Components/Header/Header';
import Form from '../../Components/Formulario/Formulario';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      autores: []
    };
  }

  removeAutor = id => {
    const { autores } = this.state;

    const autoresAtualizado = autores.filter(autor => {
      return autor.id !== id;
    });
    ApiService.RemoveAutor(id)
      .then(res => {
        if (res.message === "deleted") {
          this.setState({ autores: [...autoresAtualizado] })
          PopUp.exibeMensagem("error", "Autor removido com sucesso");
        }
      })
      .catch(err => PopUp.exibeMensagem("Error", "Erro na comunicação com a API ao tentar remover autor."));
  }

  escutadorDeSubmit = autor => {
    ApiService.CriaAutor(JSON.stringify(autor))
      .then(res => {
        if (res.message === "success") {
          this.setState({ autores: [...this.state.autores, res.data] });
          PopUp.exibeMensagem("success", "Autor adicionado com sucesso");
        }
      })
      .catch(err => PopUp.exibeMensagem("Error", "Erro na comunicação com a API ao tentar remover autor."));
  }

  componentDidMount() {
    ApiService.ListaAutores()
      .then(res => {
        if (res.message === "success") {
          this.setState({ autores: [...this.state.autores, ...res.data] });
        }
      })
      .catch(err => PopUp.exibeMensagem("Error", "Erro na comunicação com a API ao tentar listar os autores."));
  }

  render() {
    const campos = [
      { titulo: "Autores", dado: "nome" },
      { titulo: "Livros", dado: "livro" },
      { titulo: "Precos", dado: "preco" },
    ];

    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h1>Casa do Código</h1>
          <Tabela campos={campos} dados={this.state.autores} removeDados={this.removeAutor} />
          <Form escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>
      </Fragment>
    );
  }
}

export default App;
