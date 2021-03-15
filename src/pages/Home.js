import React, { Component } from 'react';
import Menu from '../components/Menu';
import ListImage from '../components/ListImage';
import Lista from '../components/Lista';
import Carousel from '../components/CarouselImg';
import Footer from '../components/Footer';
export default class Login extends Component {

    render() {
        return (
            <div>
                <Menu history={this.props.history} />
                <Carousel />
                <ListImage history={this.props.history} />
                <Lista history={this.props.history} />
                <Footer />
            </div>
        );
    }
}