import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import AddSchedule from './AddSchedule';

const columns = [
  { id: 'name', label: 'Nombre', minWidth: 170 },
  { id: 'date', label: 'Fecha', minWidth: 100 },
  {
    id: 'hour',
    label: 'Hora',
    minWidth: 170,
    align: 'right',

  },
  {
    id: 'pet',
    label: 'Mascota',
    minWidth: 170,
    align: 'right',

  },
  {
    id: 'service',
    label: 'Servicio',
    minWidth: 170,
    align: 'right',
  },
];

function createData(id, name, date, hour, pet, service) {
  return { id, name, date, hour, pet, service };
}

const rows = [
  createData(1, 'Miguel Casteellanos', '02/03/2021', '12:30', 'Perro', 'Peluquería'),
  createData(2, 'Miguel Casteellanos', '02/03/2021', '12:30', 'Perro', 'Peluquería'),
  createData(3, 'Miguel Casteellanos', '02/03/2021', '12:30', 'Perro', 'Peluquería'),
  createData(4, 'Miguel Casteellanos', '02/03/2021', '12:30', 'Perro', 'Peluquería'),
  createData(5, 'Miguel Casteellanos', '02/03/2021', '12:30', 'Perro', 'Peluquería'),
  createData(6, 'Miguel Casteellanos', '02/03/2021', '12:30', 'Perro', 'Peluquería'),
  createData(7, 'Miguel Casteellanos', '02/03/2021', '12:30', 'Perro', 'Peluquería'),
  createData(8, 'Miguel Casteellanos', '02/03/2021', '12:30', 'Perro', 'Peluquería'),
  createData(9, 'Miguel Casteellanos', '02/03/2021', '12:30', 'Perro', 'Peluquería'),
  createData(10, 'Miguel Casteellanos', '02/03/2021', '12:30', 'Perro', 'Peluquería'),
  createData(11, 'Miguel Casteellanos', '02/03/2021', '12:30', 'Perro', 'Peluquería'),
  createData(12, 'Miguel Casteellanos', '02/03/2021', '12:30', 'Perro', 'Peluquería'),
  createData(13, 'Miguel Casteellanos', '02/03/2021', '12:30', 'Perro', 'Peluquería'),
  createData(14, 'Miguel Casteellanos', '02/03/2021', '12:30', 'Perro', 'Peluquería'),
  createData(15, 'Miguel Casteellanos', '02/03/2021', '12:30', 'Perro', 'Peluquería'),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },

});

export default function ManageReservations(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    if (localStorage.getItem("type") !== "admin") {
      window.location.replace("/")
    }
  });

  return (
    <div>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead >
              <TableRow >
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      fontWeight: 'bold',
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <AddSchedule />
    </div>
  );
}
