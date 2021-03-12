import React, { Component } from 'react';
import Menu from '../components/Menu';
import AgendaComponent from '../components/AgendaComponent';
import {Container} from '@material-ui/core';


export default class AgendaAdmin extends Component {
    render() {
        return (
            <container maxWidth="sm">
                <div  style={{
                    backgroundImage: `url("../calendario.jpg")`,
                    backgroundSize:'cover',
                    backgroundRepeat: 'no-repeat',
                    height: "100vh"                     

                }} >
                    <Menu />
                    <Container maxWidth="md">
                        <h2 style={{
                            color:"#000000",
                            textAlign:'center',
                            fontWeight: 'bold',
                            fontSize:'20',
                            
                        }}>Agenda Disponible</h2>

                        <AgendaComponent maxWidth="md" history={this.props.history}/>
                    </Container>
                    
                </div>
            </container>
        );
    }
}