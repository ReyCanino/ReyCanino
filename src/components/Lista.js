import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ReservaForm from '../components/ReservaForm';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        textAlign: 'center',
        position: 'center',
    },
    gridList: {
        width: "65%",
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

export default function Lista(props) {
    const classes = useStyles();

    const [rows, setRows] = React.useState([]);

    useEffect(() => {
        async function fetchData(){
          await axios({
            method: 'get',
            url: 'https://reycanino-api.herokuapp.com/reyCanino/tiendas',
            }).then(async (response) => {
              setRows (response.data);
            });
        }
        fetchData();
    }, []);

    return (
        <div className={classes.root}>
            <GridList cellHeight={400} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }} >
                    <h1>
                        Tiendas Caninas
                    </h1>
                </GridListTile>
                {rows.map((row) => (
                    <GridListTile key={row.id}>
                        <img src={'/gallery/'+row.id+'.png'} alt={row.nombre} />
                        <GridListTileBar
                            title={row.nombre}
                            subtitle={<span>Direccion: {row.direccion}</span>}
                            actionIcon={
                                <ReservaForm history={props.history} />
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>

    );

}