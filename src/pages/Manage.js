import React, { Component } from 'react';
import Menu from '../components/Menu';
import ManageReservations from '../components/ManageReservations';
import GridManage from '../components/GridManage';
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
                    <Container>
                        <GridManage />
                    </Container>
                </div>
            </div>
        );
    }
}

