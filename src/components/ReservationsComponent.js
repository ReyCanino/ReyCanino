import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#757575',
    color: theme.palette.common.white,
    fontSize: 18,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, date, hour, value, store) {
  return { name, date, hour, value, store };
}

const rows = [
  createData('Peluquería', '01/03/2021', '11:30', 20000, 'Tienda 1'),
  createData('Paseo', '01/03/2021', '11:30', 20000, 'Tienda 2'),
  createData('Peluquería', '01/03/2021', '11:30', 20000, 'Tienda 3'),
  createData('Paseo', '01/03/2021', '11:30', 20000, 'Tienda 4'),
  createData('Peluquería', '01/03/2021', '11:30', 20000, 'Tienda 5'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 200,

  },
});

export default function ReservationsComponent() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Servicio</StyledTableCell>
            <StyledTableCell align="right">Fecha</StyledTableCell>
            <StyledTableCell align="right">Hora</StyledTableCell>
            <StyledTableCell align="right">Costo</StyledTableCell>
            <StyledTableCell align="right">Tienda</StyledTableCell>
            <StyledTableCell size="small" align="right"></StyledTableCell>
            <StyledTableCell size="small" align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.hour}</StyledTableCell>
              <StyledTableCell align="right">{row.value}</StyledTableCell>
              <StyledTableCell align="right">{row.store}</StyledTableCell>
              <StyledTableCell align="right" size="small">
                <IconButton aria-label="Cancelar">
                  <DeleteIcon />
                </IconButton>
              </StyledTableCell>

              <StyledTableCell align="right" size="small">
                <IconButton color="secondary" aria-label="add an alarm">
                  <AlarmIcon />
                </IconButton>
              </StyledTableCell>


            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
