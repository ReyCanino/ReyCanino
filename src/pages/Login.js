import { makeStyles} from '@material-ui/core/styles';
import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

<<<<<<< HEAD
=======
const useStyles = makeStyles((theme) => ({

}));

>>>>>>> 38c1e5d... login finalizado
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
                <LoginForm/>
            </div>
>>>>>>> 38c1e5d... login finalizado
        );
    }
}