import React, { Component } from 'react';
import Menu from '../components/Menu';
import ReservationsComponent from '../components/ReservationsComponent';
import ButtonCustom from '../components/ButtonCustom';
import { Container } from '@material-ui/core';

export default class Reservation extends Component {
    render() {
        return (
                <div style={{
                    backgroundImage: `url("../manage-reservations.png")`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: "100vh"
                }} >
                    <Menu />
                    <Container maxWidth="md">
                        <ReservationsComponent maxWidth="md" history={this.props.history} />
                        <ButtonCustom />
                    </Container>
                </div>
        );
    }
}