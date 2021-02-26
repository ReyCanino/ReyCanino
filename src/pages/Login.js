import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

export default class Login extends Component {
    
    render() {
        return (
            <container>
                <div 
                style={{
                    backgroundImage: `url("../fondo-login.png")`,
                    backgroundSize:'cover',
                    backgroundRepeat: 'no-repeat',
                    height: "100vh"                    
                    }}>
                    <LoginForm history={this.props.history}/>
                </div>
            </container>
        );
    }
}