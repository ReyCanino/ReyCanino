import React from 'react';
import Grid from '@material-ui/core/Grid';
import ManageReservations from './ManageReservations';
import AddHorario from './AddHorario';
export default function GridManage() {
    return (
        <Grid container  spacing={1}>
            <Grid item xs={10}>
                <Grid container justify="center" spacing={4}>
                    <Grid item xs={2}>
                        <h2 style={{
                            color: "#FFFFFF",
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: '20',

                        }}>Horarios</h2>

                        <AddHorario   />

                    </Grid>
                    <Grid item xs={10}>
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
