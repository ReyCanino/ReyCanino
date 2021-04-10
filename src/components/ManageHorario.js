import React, {useEffect} from "react";
import axios from "axios";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import moment from "moment";
import {makeStyles} from "@material-ui/core/styles";

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

function Row(props) {
    const { row } = props;
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>

                <TableCell component="th" scope="row">
                    {moment(row.fi).utcOffset('+0000').format('DD-MM-YY hh:mm a')}
                </TableCell>
                <TableCell>{moment(row.ff).utcOffset('+0000').format('DD-MM-YY hh:mm a')}</TableCell>
                <TableCell>{row.servicio}</TableCell>
            </TableRow>

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
                url: 'https://reycanino-api.herokuapp.com/reyCanino/consultar/'+localStorage.getItem("userID"),

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