import React, { useEffect } from 'react';
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
import axios from 'axios';

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

const servicios = [
    { title: 'Pelqueria', id: 1 },
    { title: 'Paseo', id: 2 }
]

export default function FormDialog(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [tienda, setTienda] = React.useState('');
    const [servicio, setServicio] = React.useState(-1);
    const [fecha, setFecha] = React.useState(new Date());
    const [horarios, setHorarios] = React.useState([]);
    const [tiendas, setTiendas] = React.useState([]);

    useEffect(() => {
        const fetchTiendas = async () => {
            await axios({
                method: 'get',
                url: 'https://reycanino-api.herokuapp.com/reyCanino/tiendas/',
            }).then((response) => {
                setTiendas(response.data);
            });
        }
        fetchTiendas();
    }, []);

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
        setTienda(newValue.id);
    }
    const handleServicioChange = (e, newValue) => {
        setServicio(newValue.id);
    }

    const handleFechaChange = (e) => {
        setFecha(e.target.value);
    }
    const buscar = async (horario) => {
        const response = await fetch('http://localhost:8080/reyCanino/consultar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(horario)
        })
        return response.json();
    }

    const buscarDisponibilidad = async () => {
        console.log(tienda, servicio, fecha);
        if (!tienda.length || servicio < 0 || !fecha)
            return;
        let valores = fecha.split("-");
        let newDate = new Date(
            valores[0],
            parseInt(valores[1], 10) - 1,
            valores[2]
        );
        let horario = {
            "fechaConsulta": newDate,
            "servicio": servicio,
            "tiendaCanina": tienda
        }
        buscar(horario).then((data) => {
            setHorarios(data);
        });
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
                        options={tiendas}
                        onChange={handleTiendaChange}
                        getOptionLabel={(option) => option.nombre}
                        getOptionSelected={(option) => option.id}
                        renderInput={(params) => (
                            <TextField {...params} label="Tienda" margin="normal" />
                        )}
                    />
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
                        margin="dense"
                        id="dueDate"
                        type="date"
                        onChange={handleFechaChange}
                        fullWidth
                    />
                    <Button onClick={() => { buscarDisponibilidad() }} variant="contained" className={classes.buscar}>
                        Buscar disponibilidad
                    </Button>
                    <TablaHorarios key="horarios" horarios={horarios} save={handleSave} />
                </DialogContent>
            </Dialog>
        </div>
    );
}

