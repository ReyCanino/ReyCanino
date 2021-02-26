import React, { Component } from 'react';
import Menu from '../components/Menu';
import ListImage from '../components/ListImage';
import Lista from '../components/Lista';
import Example from '../components/CarouselImg';
import Footer from '../components/Footer';
export default class Login extends Component {

    render() {
        return (
            <div>
                <Menu/>
                <Example></Example>
                <ListImage/>
                <Lista history={this.props.history} />
                <Footer/>
            </div>
        );
    }
}