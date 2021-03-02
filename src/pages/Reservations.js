import React, { Component } from 'react';
import Menu from '../components/Menu';
import ReservationsComponent from '../components/ReservationsComponent';

export default class Reservation extends Component {

    render() {
        return (
            <container >
                <Menu />
                <div
                style={{
                    backgroundImage: `url("../fondo-login.png")`,
                    backgroundSize:'cover',
                    backgroundRepeat: 'no-repeat',
                    height: "100vh",

                    }}>
                    <ReservationsComponent history={this.props.history}/>
                </div>
            </container>
        );
    }
}