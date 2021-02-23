import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


export default function TablaHorarios(props) {
    const classes = useStyles();

    const enviar = (id) => {
        console.log(id);
    }
    return (
        <div>
            {
                props.horarios.length !== 0 &&
                <div>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell align="center">Hora Inicial</TableCell>
                                    <TableCell align="center">Hora Final</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.horarios.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.id}
                                        </TableCell>
                                        <TableCell align="center">{row.horaini}</TableCell>
                                        <TableCell align="center">{row.horafin}</TableCell>
                                        <TableCell align="center">
                                            <Button variant="contained" color="primary" onClick={enviar(row.id)}>
                                                Reservar
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            }
        </div>
    );
}
