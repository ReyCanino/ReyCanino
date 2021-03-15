import React, { Component } from 'react';
import Menu from '../components/Menu';
import ManageReservations from '../components/ManageReservations';
import { Container } from '@material-ui/core';

export default class Manage extends Component {

    render() {
        return (
            <div>

                <div style={{
                    backgroundImage: `url("../manage-reservations.jpg")`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: "100vh"

                }}>
                    <Menu history={this.props.history} />
                    <h2 style={{
                        color: "#FFFFFF",
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: '20',

                    }}>Registro de Reservaciones</h2>
                    <Container maxWidth="md">
                        <ManageReservations history={this.props.history} />
                    </Container>

                </div>
            </div>
        );
    }
}

