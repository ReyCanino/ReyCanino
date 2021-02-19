import { Component } from 'react';

export default class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elementos: []
        };
    }

    render() {
        return (
            <h2>Listado</h2>
        );
    }
}