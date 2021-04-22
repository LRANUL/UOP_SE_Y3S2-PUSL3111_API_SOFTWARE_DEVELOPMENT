import React, { Component } from 'react';
import { Contacts } from '../components/Contacts';

export class testFetch extends Component {
    state = {
        contacts: []
    }

    componentDidMount() {
        fetch('https://mocki.io/v1/f7dad1f2-4283-4d3c-b152-185336cdb07f')
            .then(res => res.json())
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
