import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { Tab } from '@material-ui/core';

// const TableBody = props => {
//     const linhas = props.autores.map((linha) => {
//         return (
//             <tr key={linha.id}>
//                 <td>{linha.nome}</td>
//                 <td>{linha.livro}</td>
//                 <td>{linha.preco}</td>
//                 <td><button className="waves-effect wavez-light btn indigo lighten-2" onClick={() => props.removeAutor(linha.id)}>Remover</button></td>
//             </tr>
//         )
//     });

//     return (
//         <tbody>
//             {linhas}
//         </tbody>
//     )
// }

class Tabela extends Component {
    render() {
        const { autores, removeAutor } = this.props;
        console.log(autores);

        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Autores</TableCell>
                        <TableCell>Livros</TableCell>
                        <TableCell>Preços</TableCell>
                        <TableCell>Remover</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {autores.map(autor => (
                        <TableRow key={autor.id}>
                            <TableCell>{autor.nome}</TableCell>
                            <TableCell>{autor.livro}</TableCell>
                            <TableCell>{autor.preco}</TableCell>
                            <TableCell>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => removeAutor(autor.id)}>Remover</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        )
    }
}

export default Tabela;