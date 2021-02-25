import React, { Component } from 'react';
import Menu from '../components/Menu'
import ListImage from '../components/ListImage'

export default class Login extends Component {

    render() {
        return (
            <div>
                <Menu/>
                <ListImage></ListImage>
            </div>
        );
    }
}