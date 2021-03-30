import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Input, InputLabel, Link, Typography } from '@material-ui/core/';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKeySharpIcon from '@material-ui/icons/VpnKeySharp';
import Button from '@material-ui/core/Button';
import { login, isLogin } from '../utils';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
    paper: {
        maxWidth: 350,
        margin: `${theme.spacing(2)}px auto`,
        padding: theme.spacing(2),
        height: '650px',
        top: '50%',
        left: '50%',
        textAlign: 'center',
        position: 'center',
    },
    button: {
        backgroundColor: '#000',
        color: '#FFF',
        margin: '20px'
    },
    image: {
        margin: '20px',
        borderRadius: '20px',
    },
    form: {
        margin: '20px',
    },
    letter: {
        color: 'grey',
        size: '9px'
    }
}));

export default function LoginForm(props) {

    const classes = useStyles();
    const [error, setError] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [passw, setPassw] = React.useState("");


    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswChange = (event) => {
        setPassw(event.target.value);
    }
    
    const handleLogin = () => {
        login(email, passw);
        if (isLogin()) {
            window.location = "/";
        } else {
            setError(true);
        }
    }
    return (
        <div className={classes.root} >
            <Paper className={classes.paper}>
                <Grid>
                    <h1>Bienvenido</h1>
                    <img src="/logo-gr.png" width='200' alt="Rey canino logo" className={classes.image} />
                    {error && <Typography variant="subtitle1" component="h2" color="error">
                        Usuario o contraseña invalidos
                    </Typography>}

                    <FormControl className={classes.form} >
                        <InputLabel htmlFor="user">Nombre de usuario</InputLabel>
                        <Input
                            id="user"
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            }
                            onChange={handleEmailChange}
                        />
                    </FormControl>
                    <FormControl className={classes.form}>
                        <InputLabel htmlFor="pwd" >Contraseña</InputLabel>
                        <Input
                            id="pwd"
                            type="password"
                            startAdornment={
                                <InputAdornment position="start">
                                    <VpnKeySharpIcon />
                                </InputAdornment>
                            }
                            onChange={handlePasswChange} />
                    </FormControl>
                    <div>
                        <Button id="botonIngresar" variant="contained" className={classes.button} disableElevation onClick={handleLogin}>
                            Ingresar
                        </Button>
                    </div>
                    <div>
                        <Typography className={classes.letter}>
                            ¿Eres nuevo en Rey Canino?
                        </Typography>
                        <Link
                            id="botonRegistrarse"
                            component="button"
                            variant="body2"
                            onClick={() => { window.location = '/register' }}
                        > Crea tu cuenta
                        </Link>
                    </div>
                </Grid>
            </Paper>
        </div >
    );
}