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
import moment from 'moment';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    button: {
        color: '#000',
        backgroundColor: "#fff"
    },
});


export default function TablaHorarios(props) {
    const classes = useStyles();

    return (
        <div>
            {
                props.horarios.length !== 0 &&
                <div>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Hora Inicial</TableCell>
                                    <TableCell align="center">Hora Final</TableCell>
                                    <TableCell align="center">Reservar</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.horarios.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell align="center">{moment(row.fi).utcOffset('+0000').format('DD-MM-YY hh:mm a')}</TableCell>
                                        <TableCell align="center">{moment(row.ff).utcOffset('+0000').format('DD-MM-YY hh:mm a')}</TableCell>
                                        <TableCell align="center">
                                            <Button variant="contained" className={classes.button} color="primary" onClick={() => { props.save(row.id) }}>
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
