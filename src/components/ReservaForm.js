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
import TablaHorarios from './TablaHorarios';
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
    }
}));

const options = [
    { title: 'Tienda 1' },
    { title: 'Tienda 2' },
    { title: 'Tienda 3' },
    { title: 'Tienda 4' },
    { title: 'Tienda 5' },
    { title: 'Tienda 6' },
    { title: 'Tienda 7' },
    { title: 'Tienda 8' }
]
const servicios = [
    { title: 'Pelqueria' },
    { title: 'Paseo' }
]

export default function FormDialog(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [tienda, setTienda] = React.useState('');
    const [servicio, setServicio] = React.useState('');
    const [fecha, setFecha] = React.useState(new Date());
    const [horarios, setHorarios] = React.useState([]);

    const handleClickOpen = () => {
        if (isLogin())
            setOpen(true);
        else
            props.history.push("/login");

    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = (id) => {
        if (id === 0) {
            return;
        }
        setTienda("");
        setServicio("");
        setFecha(null);
        setOpen(false);
        setHorarios([]);
    };

    const handleTiendaChange = (e, newValue) => {
        setTienda(newValue.title);
    }
    const handleServicioChange = (e, newValue) => {
        setServicio(newValue.title);
    }

    const handleFechaChange = (e) => {
        setFecha(e.target.value);
    }

    const buscarDisponibilidad = (e) => {
        console.log(tienda, servicio, fecha);
        if (!tienda.length || !servicio.length || !fecha)
            return;
        setHorarios([{
            id: 1,
            horaini: "fecha ejemplo",
            horafin: "fecha ejemplo"
        },
        {
            id: 2,
            horaini: "fecha ejemplo",
            horafin: "fecha ejemplo"
        }, {
            id: 3,
            horaini: "fecha ejemplo",
            horafin: "fecha ejemplo"
        }
        ]);
    }

    return (
        <div className={classes.root}>
            <Fab size="small" aria-label="add" onClick={handleClickOpen} className={classes.button}>
                <AddIcon />
            </Fab>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title"
                fullWidth={true}
                maxWidth="xl"
                scroll="paper">
                <DialogTitle id="form-dialog-title">Crear reserva</DialogTitle>
                <DialogContent>
                    <Autocomplete
                        id="tienda"
                        options={options}
                        onChange={handleTiendaChange}
                        getOptionLabel={(option) => option.title}
                        getOptionSelected={(option) => option.title}
                        renderInput={(params) => (
                            <TextField {...params} label="Tienda" margin="normal" />
                        )}
                    />
                    <Autocomplete
                        id="servicio"
                        options={servicios}
                        onChange={handleServicioChange}
                        getOptionLabel={(option) => option.title}
                        getOptionSelected={(option) => option.title}
                        renderInput={(params) => (
                            <TextField {...params} label="Servicio" margin="normal" />
                        )}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="dueDate"
                        type="date"
                        onChange={handleFechaChange}
                        fullWidth
                    />
                    <Button onClick={buscarDisponibilidad} variant="contained" className={classes.buscar}>
                        Buscar disponibilidad
                    </Button>
                    <TablaHorarios key="horarios" horarios={horarios} save={handleSave} />
                </DialogContent>
            </Dialog>
        </div>
    );
}

