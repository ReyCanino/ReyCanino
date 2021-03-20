import React, { Component } from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Page from "../sample/PageNotFound";
import { Container } from '@material-ui/core';


export default class NotFound extends Component {

    render() {
        return (
            <Container align='center'>
                <Menu history={this.props.history} />
                <img src={Page.img} align='middle' width='75%' height='auto'/>
                <Footer />
            </Container>
        );
    }
}
