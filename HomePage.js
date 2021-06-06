import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { joker } from './redux/actions/joke_actions';
// import { StyleButton } from './Styles';

const HomePage = () => {
    const joke = useSelector(state => state.value);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>{joke}</Text>
            <StatusBar style="auto" />
            <TouchableHighlight onPress={async () => await dispatch( joker() )}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Use Fetch API</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create(StyleButton());

function StyleButton() {
    return {
        button: {
            padding: 10,
            marginVertical: 15,
            backgroundColor: '#0645AD'
        },
        buttonText: {
            color: '#fff'
        },
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        }
    }
}

export default HomePage;
