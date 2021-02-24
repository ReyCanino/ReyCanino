import React, { Component } from 'react';
import RegisterForm from '../components/RegisterForm';

export default class Register extends Component {
    
    render() {
        return (
            <div 
            style={{
                backgroundImage: `url("../fondo-login.png")`,
                backgroundRepeat: 'no-repeat',
                width:'1250',
                height:'730px',
                color:'white'
            }}>
                <RegisterForm history={this.props.history}/>
            </div>
        );
    }
}