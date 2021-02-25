import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import tiendas from "../sample/Tiendas";
import ReservaForm from '../components/ReservaForm';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        textAlign:'center',
        position:'center',
    },
    gridList: {
        width: "90%",
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

export default function Lista(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={400} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }} >
                    <h1>
                        Tiendas Caninas
                    </h1>
                </GridListTile>
                {tiendas.map((tile) => (
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.nombre} />
                        <GridListTileBar
                            title={tile.nombre}
                            subtitle={<span>Direccion: {tile.direccion}</span>}
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