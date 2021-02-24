import React, { Component } from 'react';
import RegisterForm from '../components/RegisterForm';

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
                <RegisterForm history={this.props.history}/>
            </div>
        );
    }
}