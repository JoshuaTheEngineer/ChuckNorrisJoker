import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import ChuckNorrisApi from './api/ChuckNorrisApi';
import Styles from './Styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <TouchableHighlight onPress={ChuckNorrisApi.getJoke}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Use Fetch API</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create(Styles());
