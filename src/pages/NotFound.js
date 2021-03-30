import React, { Component } from 'react';
import Menu from '../components/Menu';
import { Fab } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default class NotFound extends Component {

    render() {
        return (
            <div style={{
                backgroundImage: `url("../404.png")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: "100vh"
            }}>
                <Menu history={this.props.history} />
                <Fab color="primary" aria-label="add">
                    <ArrowBackIcon />
                </Fab>            
            </div>
        );
    }
}