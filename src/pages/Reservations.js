import React, { Component } from 'react';
import Menu from '../components/Menu';
import ReservationsComponent from '../components/ReservationsComponent';
import {Container} from '@material-ui/core';

export default class Reservation extends Component {

    render() {
        return (
            <container maxWidth="sm">
                
                <div  style={{
                    backgroundImage: `url("../client-reservation2.jpg")`,
                    backgroundSize:'cover',
                    backgroundRepeat: 'no-repeat',
                    height: "100vh"                     

                }} >
                    <Menu />
                    <Container maxWidth="md">
                        <h2 style={{
                            color:"#FFFFFF",
                            textAlign:'center',
                            fontWeight: 'bold',
                            fontSize:'20',
                            
                        }}>Reservaciones</h2>

                        <ReservationsComponent maxWidth="md" history={this.props.history}/>
                    </Container>
                    
                </div>
            </container>
        );
    }
}