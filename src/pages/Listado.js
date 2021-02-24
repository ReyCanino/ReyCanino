import React, { Component } from 'react';
import Menu from '../components/Menu';

import Lista from '../components/Lista'


export default class Listado extends Component {

    render() {
        return (
            <div>
                <Menu />
                <Lista history={this.props.history} />
            </div>
        );

    }
}