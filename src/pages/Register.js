import React, { Component } from 'react';
import RegisterForm from '../components/RegisterForm';

export default class Register extends Component {
    
    render() {
        return (
            <div 
            style={{
                backgroundImage: `url("../fondo-login.png")`,
<<<<<<< HEAD
                    backgroundSize:'cover',
                    backgroundRepeat: 'no-repeat',
                    height: "100vh"   
=======
                backgroundRepeat: 'no-repeat',
                width:'1250',
                height:'730px',
                color:'white'
>>>>>>> 4d9b1e0... Registro final
            }}>
                <RegisterForm history={this.props.history}/>
            </div>
        );
    }
}