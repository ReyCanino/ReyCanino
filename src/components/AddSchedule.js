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
        backgroundColor: "#fff",
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    buscar: {
        color: '#fff',
        backgroundColor: "#000",
    },
    dialog: {
        textAlign: "center"
    }
}));

const tiposRepeticion = [
    { title: 'Unica' },
    { title: 'Diaria' },
    { title: 'Semanal' },
    { title: 'Mensual' }
]

const servicios = [
    { title: 'Peluqueria', value: "peluqueria" },
    { title: 'Veterinaria', value: "veterinaria" }
]

export default function FormDialog(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [tipoRepeticion, setTipo] = React.useState('');
    const [servicio, setServicio] = React.useState('');
    const [fecha, setFecha] = React.useState(new Date());
    const [times, setTimes] = React.useState(1);
    const [time, setTime] = React.useState("00:00");
    const [timef, setTimeF] = React.useState("00:00");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleTipoChange = (e, newValue) => {
        setTipo(newValue.title);
    }

    const handleFechaChange = (e) => {
        setFecha(e.target.value);
    }

    const handleServicioChange = (e, newValue) => {
        setServicio(newValue.value);
    }

    const handleTimesChange = (e) => {
        setTimes(e.target.value);
    }

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    }

    const handleTimeFChange = (e) => {
        if (e.target.value < time) {
            var element = document.getElementById("timeF");
            element.error = true
            return;
        }
        setTimeF(e.target.value);
    }

    const addSchedule = (e) => {
        console.log(times <= 0);
        if (times <= 0 || !fecha || !tipoRepeticion.length || !servicio.length || !time || !timef)
            return;
        console.log(fecha);
        let timesI = time.split(":");
        let timesF = timef.split(":");
        let fechaf = new Date(fecha);
        let fechai = new Date(fecha);
        fechai.setUTCHours(timesI[0])
        fechai.setUTCMinutes(timesI[1])
        fechaf.setUTCHours(timesF[0])
        fechaf.setUTCMinutes(timesF[1])
        let horario = {
            ff: fechaf,
            fi: fechai,
            servicio: servicio,
            tiendaCanina: localStorage.getItem("userID"),
            cantRepeticiones: times,
            tipoRepeticion: tipoRepeticion

        }
        console.log(fechai);
        console.log(fechaf);
        console.log(JSON.stringify(horario));
        fetch('http://localhost:8080/reyCanino/horario/agregar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(horario)
        }).then(response => console.log(response))
            .catch(error => console.error(error));
        handleClose();
    }

    return (
        <div className={classes.root}>
            <Fab id="addSchedule" size="large" aria-label="add" onClick={handleClickOpen} className={classes.button}>
                <AddIcon />
            </Fab>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title"
                maxWidth="xs"
                fullWidth={true}
                className={classes.dialog}
                scroll="paper">
                <DialogTitle id="form-dialog-title">Agregar Horario</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="dueDate"
                        type="date"
                        value={fecha}
                        onChange={handleFechaChange}
                        fullWidth

                    />
                    <Autocomplete
                        id="servicio"
                        options={servicios}
                        onChange={handleServicioChange}
                        getOptionLabel={(option) => option.title}
                        getOptionSelected={(option) => option.value}
                        renderInput={(params) => (
                            <TextField {...params} label="Servicio" margin="normal" />
                        )}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="time"
                        type="time"
                        label="Hora inicio"
                        value={time}
                        onChange={handleTimeChange}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="timeF"
                        type="time"
                        label="Hora fin"
                        value={timef}
                        onChange={handleTimeFChange}
                        fullWidth
                    />
                    <Autocomplete
                        id="tipoRepeticion"
                        options={tiposRepeticion}
                        onChange={handleTipoChange}
                        getOptionLabel={(option) => option.title}
                        getOptionSelected={(option) => option.title}
                        renderInput={(params) => (
                            <TextField {...params} label="Tipo Repeticion" margin="normal" />
                        )}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="times"
                        type="number"
                        value={times}
                        onChange={handleTimesChange}
                        fullWidth
                    />
                    <Button id="agregar" onClick={addSchedule} variant="contained" className={classes.buscar}>
                        Agregar
                    </Button>
                </DialogContent>
            </Dialog>
        </div>
    );
}

