import React, { Component } from 'react';
import { Contacts } from '../components/Contacts';
import { MapComponent } from '../components/MapComponent';
import "../styles/styles.css";
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    scrollView: {
        backgroundColor: 'yellow',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },
});
export class testFetch extends Component {
    state = {
        contacts: []
    }

    componentDidMount() {
        // let token = "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxZGMxNGQ4ODc4OTRhODA5ZmMyZmEiLCJpYXQiOjE2MTkxMjMzMTZ9.aqbCG5RiYrcM6x-Lrxg9vcDu2qYUabWeuaY5ljlWJNg";
        // let headers = { "Content-Type": "application/json" };
        // if (token) {
        //     headers["Authorization"] = `Token ${token}`;
        // }

        const myHeaders = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxZGMxNGQ4ODc4OTRhODA5ZmMyZmEiLCJpYXQiOjE2MTkxMjMzMTZ9.aqbCG5RiYrcM6x-Lrxg9vcDu2qYUabWeuaY5ljlWJNg'
        });

        fetch('http://localhost:8081/data/db.json', {
            method: 'GET',
            headers: myHeaders,
        })
            .then(res => res.json())
            .then(console.log())
            .then((data) => {
                this.setState({ contacts: data })
            })
            .catch(console.log)
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Contacts contacts={this.state.contacts} />
                </ScrollView>
                <View style={styles.scrollView}>
                    <MapComponent />
                </View>
            </SafeAreaView>
        );
    }
}
