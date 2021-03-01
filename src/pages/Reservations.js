import React, { Component } from 'react';
import ReservationsComponent from '../components/ReservationsComponent';

export default class Reservation extends Component {

    render() {
        return (
            <container >
                <div
                style={{
                    backgroundImage: `url("../fondo-login.png")`,
                    backgroundSize:'cover',
                    backgroundRepeat: 'no-repeat',
                    height: "100vh",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                    }}>
                    <ReservationsComponent history={this.props.history}/>
                </div>
            </container>
        );
    }
}