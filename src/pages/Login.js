import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

export default class Login extends Component {
    
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
                <LoginForm history={this.props.history}/>
            </div>
        );
    }
}