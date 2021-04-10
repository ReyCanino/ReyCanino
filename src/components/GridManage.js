import React from 'react';
import Grid from '@material-ui/core/Grid';
import ManageReservations from './ManageReservations';
import ManageHorario from './ManageHorario';
import GridListTileBar from "@material-ui/core/GridListTileBar";


import GridListTile from "@material-ui/core/GridListTile";
import AddSchedule from'./AddSchedule';

export default function GridManage() {
    return (
        <Grid container  spacing={1}>
            <Grid item xs={10}>
                <Grid container justify="center" spacing={4}>
                    <Grid item xs={6}>
                        <h2 style={{
                            color: "#FFFFFF",
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: '20',

                        }}>Horarios</h2>

                        <ManageHorario  />
                        <GridListTile >
                            <br/>
                            <h2 style={{
                                color: "#FFFFFF",
                                textAlign: 'center',
                            }}>Agregar Horario</h2>

                            <GridListTileBar
                                actionIcon={
                                    <AddSchedule />
                                }
                            />
                        </GridListTile>

                    </Grid>
                    <Grid item xs={6 }>
                        <h2 style={{
                            color: "#FFFFFF",
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: '20',

                        }}>Registro de Reservaciones</h2>
                        <ManageReservations  />
                    </Grid>

                </Grid>
            </Grid>

        </Grid>
    );
}
