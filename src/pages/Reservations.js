import React, { Component } from 'react';
import Menu from '../components/Menu';
import ReservationsComponent from '../components/ReservationsComponent';
import { Container } from '@material-ui/core';

export default class Reservation extends Component {

    render() {
        return (
                <div style={{
                    backgroundImage: `url("../reservation.png")`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: "100vh"
                }} >
                    <Menu />
                    <br /><br /><br /><br /><br /><br />
                    <Container maxWidth="md">
                        <ReservationsComponent maxWidth="md" history={this.props.history} />
                    </Container>
                </div>
        );
    }
}