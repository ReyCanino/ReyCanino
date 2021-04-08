import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';
import IconButton from '@material-ui/core/IconButton';
import PetsIcon from '@material-ui/icons/Pets';

const useStyles = makeStyles({
    root: {
        marginTop: 20
    },
    table: {
        minWidth: 500,
    },
    button: {
        color: '#fff',
        backgroundColor: "#000"
    },
});


export default function TablaHorarios(props) {
    const classes = useStyles();

    return (
        <div>
            {
                props.horarios.length !== 0 &&
                <div>
                    <TableContainer component={Paper} className={classes.root}>
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
                                            <IconButton variant="contained" onClick={() => { props.save(row.id) }}>
                                                <PetsIcon />
                                            </IconButton>
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
