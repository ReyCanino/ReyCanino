import React, {useEffect} from "react";
import axios from "axios";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

export default function CollapsibleTable() {
    const [rows, setRows] = React.useState([]);
    const horario = {

    }

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
                        <tr>
                            <td>{row.fi}</td>
                            <td>{row.ff}</td>
                            <td>{row.servicio}</td>
                        </tr>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}