import React, { Component } from 'react';
import Menu from '../components/Menu';

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
            </div>
        );
    }
}