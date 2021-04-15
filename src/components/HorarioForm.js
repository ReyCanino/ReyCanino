import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { isLogin } from '../utils';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
    button: {
        color: '#000',
        backgroundColor: "#fff"
    },
    buscar: {
        color: '#fff',
        backgroundColor: "#000"
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),

    },
}));

const servicios = [
    { title: 'Peluqueria', id: 1 },
    { title: 'Paseo', id: 2 }
]

export default function FormDialog(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [servicio, setServicio] = React.useState(-1);
    const [fecha, setFecha] = React.useState(new Date());
    const [fechaInicio, setFechaInicio] = React.useState(new Date());
    const [fechaFin, setFechaFin] = React.useState(new Date());
    const handleClickOpen = () => {
        if (isLogin())
            setOpen(true);
        else
            props.history.push("/login");
    };

    const handleClose = () => {
        setOpen(false);
    };
    const guardarHorario = async (horario) => {
        fetch('https://reycanino-api.herokuapp.com/reyCanino/horario/agregar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(horario)
        }).then(response => console.log(response))
            .catch(error => console.error(error));
    }

    const guardar = () => {
        let body = {
            id: "999",
            servicio: servicio,
            ff:fechaInicio,
            fi:fechaFin,
            tiendaCanina: localStorage.getItem("userID"),
            fechaConsulta: fecha,
            reserva: null
        };
        guardarHorario(body);
        setServicio(0);
        setFecha(null);
        setFechaInicio(null);
        setFechaFin(null);
    }
    const handleServicioChange = (e, newValue) => {
        setServicio(newValue.title);
    }
    const handleFechaInicioChange = (e) => {
        setFechaInicio(e.target.valueAsDate);
    }
    const handleFechaFinChange = (e) => {
        setFechaFin(e.target.valueAsDate);
    }

    return (
        <div className={classes.root}>
            <Fab size="small" aria-label="add" onClick={handleClickOpen} className={classes.button}>
                <AddIcon />
            </Fab>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title"
                    fullWidth={true}
                    maxWidth="sm"
                    scroll="paper">
                <DialogTitle id="form-dialog-title">Crear Horario</DialogTitle>
                <DialogContent>
                    <Autocomplete
                        id="servicio"
                        options={servicios}
                        onChange={handleServicioChange}
                        getOptionLabel={(option) => option.title}
                        getOptionSelected={(option) => option.id}
                        renderInput={(params) => (
                            <TextField {...params} label="Servicio" margin="normal" />
                        )}
                    />
                    <TextField
                        autoFocus
                        id="fechaInicio"
                        label="Fecha Inicio"
                        type="date"
                        defaultValue="2021-04-17T16:30:00-05:00"
                        onChange={handleFechaInicioChange}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        id="fechaFin"
                        label="Fecha Fin"
                        type="date"
                        defaultValue="2021-04-17T16:30:00-05:00"
                        fullWidth
                        onChange={handleFechaFinChange}
                    />
                    <br />
                    <br />
                    <Button onClick={guardar} variant="contained" className={classes.buscar}>
                        Guardar Horario
                    </Button>
                </DialogContent>
            </Dialog>
        </div >
    );
}
