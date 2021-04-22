import React, { Component } from 'react';
import { Contacts } from '../components/Contacts';

export class testFetch extends Component {
    state = {
        contacts: []
    }

    componentDidMount() {
        fetch('http://localhost:8081/data/db.json')
            .then(res => res.json())
            .then(console.log())
            .then((data) => {
                this.setState({ contacts: data })
            })
            .catch(console.log)
    }

    render() {
        return (
            <Contacts contacts={this.state.contacts} />
        );
    }
}
