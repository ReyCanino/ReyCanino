import React, { Component } from 'react';
import Menu from '../components/Menu';
import ManageReservations from '../components/ManageReservations';
import AddSchedule from '../components/AddSchedule';
import { Container } from '@material-ui/core';

export default class Manage extends Component {
    render() {
        return (
            <div>
                <div style={{
                    backgroundImage: `url("../manage-reservations.png")`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: "100vh"
                }}>
                    <Menu history={this.props.history} />
                    <Container>
                        <ManageReservations  />
                        <AddSchedule />
                    </Container>
                </div>
            </div>
        );
    }
}

