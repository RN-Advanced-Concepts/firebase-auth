import firebase from 'firebase';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

class App extends Component {
	componentDidMount() {
		const firebaseConfig = {
			apiKey: 'AIzaSyCSiVXElfEhss5HSSBbo8TZJL2MK4olMF0',
			authDomain: 'one-time-password-dbf0a.firebaseapp.com',
			databaseURL: 'https://one-time-password-dbf0a.firebaseio.com',
			projectId: 'one-time-password-dbf0a',
			storageBucket: 'one-time-password-dbf0a.appspot.com',
			messagingSenderId: '190628904061',
			appId: '1:190628904061:web:fb1cfc670a97a5b4f54514',
			measurementId: 'G-9JQCGRFLD7'
		};
		// Initialize Firebase
		firebase.initializeApp(firebaseConfig);
	}
	render() {
		return (
			<View style={styles.container}>
				<SignUpForm />
				<SignInForm />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'space-around'
	}
});

export default App;
