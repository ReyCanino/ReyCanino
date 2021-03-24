import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#000",
        position: 'static',
        marginTop: '50px',
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <AppBar className={classes.root} >
            <Toolbar>
                <div>
                    <Typography variant="body1" color="inherit">
                        © 2021 - Escuela Colombiana de Ingenieria Julio Garavito
                    </Typography>
                </div>
            </Toolbar>
        </AppBar>
    )
}