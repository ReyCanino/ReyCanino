import React, { Component } from 'react';
import Menu from '../components/Menu';
import ManageReservations from '../components/MaganeReservations';
import {Container} from '@material-ui/core';

export default class Reservation extends Component {

    render() {
        return (
            <container>
                
                <div style={{
                    backgroundImage: `url("../manage-reservations.jpg")`,
                    backgroundSize:'cover',
                    backgroundRepeat: 'no-repeat',
                    height: "100vh"                     

                }}>
                    <Menu />
                    <Container maxWidth="md">
                        <ManageReservations history={this.props.history}/>
                    </Container>
                    
                </div>
            </container>
        );
    }
}