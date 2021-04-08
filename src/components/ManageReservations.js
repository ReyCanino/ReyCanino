import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import axios from 'axios';
import moment from 'moment';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {moment(row.fi).zone('+0000').format('DD-MM-YY hh:mm a')}
        </TableCell>
        <TableCell>{moment(row.ff).zone('+0000').format('DD-MM-YY hh:mm a')}</TableCell>
        <TableCell>{row.servicio}</TableCell>
        <TableCell>{(row.reserva != null)?"Ocupado":"Disponible"}</TableCell>
      </TableRow>

      {row.reserva!=null && <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Detalles de la reserva
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre Mascota</TableCell>
                    <TableCell>Raza Mascota</TableCell>
                    <TableCell>Comentario</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.reserva.nombreMascota}
                    </TableCell>
                    <TableCell>{row.reserva.razaMascota}</TableCell>
                    <TableCell>{row.reserva.comentario}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>}
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
  const [rows, setRows] = React.useState([]);

  useEffect(() => {
    if (localStorage.getItem("type") !== "admin") {
      window.location.replace("/")
    }
    async function fetchData(){
      await axios({
        method: 'get',
        url: 'https://reycanino-api.herokuapp.com/reyCanino/horarioAdmin/'+localStorage.getItem("userID"),
        }).then(async (response) => {
          setRows (response.data);
        });
    }
    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Inicio</TableCell>
            <TableCell>Fin</TableCell>
            <TableCell>Tipo de Servicio</TableCell>
            <TableCell>Estado Reserva</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
