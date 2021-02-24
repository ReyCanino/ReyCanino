import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

export default class Login extends Component {
    
    render() {
        return (
<<<<<<< HEAD
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
            

=======
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
>>>>>>> 4d9b1e0... Registro final
        );
    }
}