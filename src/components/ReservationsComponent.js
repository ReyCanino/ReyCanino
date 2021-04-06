import React, { useEffect } from 'react';
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
import axios from 'axios';
import moment from 'moment';

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

const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
});

export default function ReservationsComponent(props) {
  const classes = useStyles();
  const [rows, setRows] = React.useState([]);

  useEffect(() => {
    if (localStorage.getItem("type") !== "regular") {
      window.location.replace("/")
    }
    async function fetchData(){
      await axios({
        method: 'get',
        url: 'https://reycanino-api.herokuapp.com/reyCanino/horario/'+localStorage.getItem("userID"),
        }).then(async (response) => {
          console.log (response.data);
          setRows (response.data);
        });
    }
    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Servicio</StyledTableCell>
            <StyledTableCell>Inicio</StyledTableCell>
            <StyledTableCell>Fin</StyledTableCell>
            <StyledTableCell size="small"></StyledTableCell>
            <StyledTableCell size="small"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.servicio}
              </StyledTableCell>
              <StyledTableCell>{moment(row.fi).zone('+0000').format('DD-MM-YY hh:mm a')}</StyledTableCell>
              <StyledTableCell>{moment(row.ff).zone('+0000').format('DD-MM-YY hh:mm a')}</StyledTableCell>
              <StyledTableCell size="small">
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
