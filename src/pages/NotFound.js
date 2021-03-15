import React, { Component } from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

export default class NotFound extends Component {

    render() {
        return (
            <div>
                <Menu history={this.props.history} />
                <h2>Oops, esta página no existe</h2>
                <Footer />
            </div>
        );
    }
}