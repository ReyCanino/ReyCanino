import React, { Component } from 'react';
import Menu from '../components/Menu';
import ReservationsComponent from '../components/ReservationsComponent';
import { Container } from '@material-ui/core';

export default class Reservation extends Component {

    render() {
        return (
                <div style={{
                    backgroundImage: `url("../reservations.png")`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: "100vh"
                }} >
                    <Menu />
                    <img src="/reservation.jpg" alt="Cabecera" width="100%" style={{marginTop:"-50px"}}/>
                    <Container maxWidth="md">
                        <ReservationsComponent maxWidth="md" history={this.props.history} />
                    </Container>
                </div>
        );
    }
}