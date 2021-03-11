import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

function createData(name, date, sHour, fHour) {
  return { name, date, sHour, fHour };
}

const rows = [
  createData('Peluquería', '01/03/2021', '7:30', '18:30'),
  createData('Paseo', '01/03/2021', '8:30', '16:30'),
  createData('Peluquería', '11/03/2021', '10:00', '20:30'),
  createData('Paseo', '11/03/2021', '8:00', '18:30'),
  createData('Peluquería', '12/03/2021', '7:30', '18:30'),
  createData('Paseo', '12/03/2021', '9:00', '16:00'),
  createData('Peluquería', '13/03/2021', '7:00', '18:00'),
  createData('Paseo', '13/03/2021', '10:00', '17:00'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 200,

  },
});

export default function AgendaComponent() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Servicio</StyledTableCell>
            <StyledTableCell align="right">Fecha</StyledTableCell>
            <StyledTableCell align="right">Hora Inicio</StyledTableCell>
            <StyledTableCell align="right">Hora Fin</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.sHour}</StyledTableCell>
              <StyledTableCell align="right">{row.fHour}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
