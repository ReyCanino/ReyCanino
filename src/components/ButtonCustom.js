import React from 'react';
import Button from '@material-ui/core/Button';
import PetsIcon from '@material-ui/icons/Pets';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 10,
        background: "black",
        color: "white",
        float: "right"
    },
}));

export default function ButtonCustom (props) {
    const classes = useStyles();
    return (
        <div >
            <Button
                variant="contained"
                className={classes.root}
                endIcon={<PetsIcon>Reservar</PetsIcon>}
                onClick={()=>{window.location="/"}}
            >
                Reservar
        </Button>
        </div>
    );
}