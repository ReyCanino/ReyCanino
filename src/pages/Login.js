import { makeStyles} from '@material-ui/core/styles';
import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

const useStyles = makeStyles((theme) => ({

}));

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
                <LoginForm/>
            </div>
        );
    }
}