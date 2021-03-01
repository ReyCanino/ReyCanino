import React, { Component } from 'react';
import FormRegister from '../components/FormRegister';

export default class Register extends Component {
    
    render() {
        return (
            <div 
            style={{
                backgroundImage: `url("../fondo-login.png")`,
                    backgroundSize:'cover',
                    backgroundRepeat: 'no-repeat',
                    height: "100vh"   
            }}>
                <FormRegister history={this.props.history}/>
            </div>
        );
    }
}