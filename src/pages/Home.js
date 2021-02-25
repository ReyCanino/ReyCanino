import React, { Component } from 'react';
import Menu from '../components/Menu'
import ListImage from '../components/ListImage'
import Lista from '../components/Lista'

export default class Login extends Component {

    render() {
        return (
            <div>
                <Menu/>
                <ListImage/>
                <Lista history={this.props.history} />
            </div>
        );
    }
}