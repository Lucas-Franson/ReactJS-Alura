import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Buttom from '@material-ui/core/Button';

import FormValidator from '../../Utils/FormValidator';
import PopUp from '../../Utils/PopUp';
import Toast from '../Toast/Toast';

class Formulario extends Component {
    constructor(props) {
        super(props);

        this.validador = new FormValidator([
            {
                campo: 'nome',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com um nome'
            },
            {
                campo: 'livro',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com um livro'
            },
            {
                campo: 'preco',
                metodo: 'isInt',
                args: [{ min: 0, max: 99999 }],
                validoQuando: true,
                mensagem: 'Entre com um valor numérico'
            },
        ]);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
            validacao: this.validador.valido(),
            open: true
        }

        this.state = this.stateInicial;
    }

    escutadorDeInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    submitFormulario = () => {

        const validacao = this.validador.valida(this.state);

        if (validacao.isValid) {
            this.props.escutadorDeSubmit(this.state);
            this.setState(this.stateInicial);
        } else {
            const { nome, livro, preco } = validacao;
            const campos = [nome, livro, preco];

            const camposInvalidos = campos.filter(elem => {
                return elem.isInvalid;
            });
            camposInvalidos.forEach(campo => {
                PopUp.exibeMensagem('error', campo.message);
            });
        }
    }

    render() {

        const { nome, livro, preco } = this.state;

        return (
            <>
                <Toast open={this.state.open} handleClose={() => this.setState({ open: false })}>
                    Toast funcionando
                </Toast>
                <form>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <TextField
                                id="nome"
                                label="Nome"
                                variant="outlined"
                                value={nome}
                                name="nome"
                                onChange={this.escutadorDeInput}
                            />
                        </Grid>

                        <Grid item>
                            <TextField
                                id="livro"
                                label="Livro"
                                variant="outlined"
                                value={livro}
                                name="livro"
                                onChange={this.escutadorDeInput}
                            />
                        </Grid>

                        <Grid item>
                            <TextField
                                id="preco"
                                label="Preço"
                                variant="outlined"
                                value={preco}
                                name="preco"
                                onChange={this.escutadorDeInput}
                            />
                        </Grid>

                        <Grid item>
                            <Buttom
                                variant="contained"
                                onClick={this.submitFormulario}
                                type="Button"
                                color="primary"
                            >
                                Salvar
                            </Buttom>
                        </Grid>
                    </Grid>
                </form>
            </>
        );
    }
}

export default Formulario;