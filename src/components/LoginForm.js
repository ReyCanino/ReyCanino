import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles} from '@material-ui/core/styles';
import { Grid, Input, InputLabel, Link, Typography } from '@material-ui/core/';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKeySharpIcon from '@material-ui/icons/VpnKeySharp';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
    paper: {
        maxWidth: 300,
        margin: `${theme.spacing(2)}px auto`,
        padding: theme.spacing(2),
        height:'650px',
        top:'50%',
        left:'50%',
        textAlign:'center',
<<<<<<< HEAD
        position:'center',
=======
>>>>>>> 38c1e5d... login finalizado
    },
    button: {
        backgroundColor:'#000',
        color:'#FFF',
        margin: '20px'
    },
    image: {
        margin: '20px',
        borderRadius:'20px',
    },
    form: {
        margin: '20px',
    }, 
    letter: {
        color:'grey',
        size:'9px'
    }
}));

<<<<<<< HEAD
export default function LoginForm(props) {

=======
export default function LoginForm() {
>>>>>>> 38c1e5d... login finalizado
const classes = useStyles();
  
return (
    <div className={classes.root} >   
        <Paper className={classes.paper}>
            <Grid>
                <h1>Bienvenido</h1>
                <img src="/logo-gr.png" width='200' className={classes.image}/>
                <FormControl className={classes.form} >
                    <InputLabel htmlFor="user">Nombre de usuario</InputLabel>
                        <Input
                        id="user"
                        startAdornment={
                            <InputAdornment position="start">
                            <AccountCircle/>
                            </InputAdornment>
                        }
                        />
                </FormControl>
                <FormControl className={classes.form}>
                    <InputLabel htmlFor="pwd" >Contraseña</InputLabel>
                        <Input
                        id="pwd"
                        type="password"
                        startAdornment={
                            <InputAdornment position="start">
                            <VpnKeySharpIcon/>
                            </InputAdornment>
                        }/>
                </FormControl>
                <div>
                   <Button variant="contained" className={ classes.button } disableElevation>
<<<<<<< HEAD
                        Ingresar
=======
                    Ingresar
>>>>>>> 38c1e5d... login finalizado
                    </Button>  
                </div>
                <div>
                    <Typography className={classes.letter}> 
                        ¿Eres nuevo en Rey Canino?
                    </Typography>
                    <Link
                    component="button"
                    variant="body2"
<<<<<<< HEAD
                    onClick={() => {props.history.push ('/register')}}
=======
                    onClick={() => {
                        console.info("Crear cuenta");
                    }}
>>>>>>> 38c1e5d... login finalizado
                    > Crea tu cuenta
                    </Link> 
                </div> 
            </Grid>
        </Paper>
    </div>
);
}