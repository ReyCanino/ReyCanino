import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles} from '@material-ui/core/styles';
import { Grid, Input, InputLabel, Link, Typography } from '@material-ui/core/';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKeySharpIcon from '@material-ui/icons/VpnKeySharp';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
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

export default function RegisterForm(props) {

const classes = useStyles();
  
return (
    <div className={classes.root} >   
        <Paper className={classes.paper}>
            <Grid>
                <h1>Crear cuenta</h1>
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
                        <InputLabel htmlFor="mail" >Email de contacto</InputLabel>
                            <Input
                            id="mail"
                            startAdornment={
                                <InputAdornment position="start">
                                <EmailIcon/>
                                </InputAdornment>
                            }/>
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
                    <FormControl className={classes.form}>
                        <InputLabel htmlFor="pwd" >Repita la contraseña</InputLabel>
                            <Input
                            id="pwd"
                            type="password"
                            startAdornment={
                                <InputAdornment position="start">
                                <VpnKeySharpIcon/>
                                </InputAdornment>
                            }/>
                    </FormControl>
                    <FormControl className={classes.form}>
                        <InputLabel htmlFor="tel" >Telefono de contacto</InputLabel>
                            <Input
                            id="tel"
                            startAdornment={
                                <InputAdornment position="start">
                                <PhoneIcon/>
                                </InputAdornment>
                            }/>
                    </FormControl>
                       
                    <div>
                    <Button variant="contained" className={ classes.button } disableElevation>
                        Registrarme
                    </Button>  
                    </div>
                    <div>
                        <Typography className={classes.letter}> 
                            ¿Ya tienes cuenta en Rey Canino?
                        </Typography>
                        <Link
                            component="button"
                            variant="body2"
                            onClick={() => {props.history.push ('/login')}}
                        > Ingresar
                    </Link> 
                </div> 
            </Grid>
        </Paper>
    </div>
);
}