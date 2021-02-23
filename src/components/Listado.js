import { makeStyles } from '@material-ui/core/styles';
import Menu from './Menu';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import tiendas from "../sample/Tiendas";
import ReservaForm from './ReservaForm';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: "90%",
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));



export default function Listado() {
    const classes = useStyles();


    return (
        <div>
            <Menu />
            <div className={classes.root}>
                <GridList cellHeight={400} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                        <ListSubheader component="div">Tiendas Caninas</ListSubheader>
                    </GridListTile>
                    {tiendas.map((tile) => (
                        <GridListTile key={tile.img}>
                            <img src={tile.img} alt={tile.nombre} />
                            <GridListTileBar
                                title={tile.nombre}
                                subtitle={<span>Direccion: {tile.direccion}</span>}
                                actionIcon={
                                    <ReservaForm />
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        </div>

    );

}