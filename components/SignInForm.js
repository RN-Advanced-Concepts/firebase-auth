import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import firebase from 'firebase';
import { Text, Input, Button } from 'react-native-elements';

const ROOT_URL = 'https://us-central1-one-time-password-dbf0a.cloudfunctions.net';
class SignInForm extends Component {
	state = { phone: '', code: '' }; // ES-2017

	handleSubmit = async () => {
		try {
			let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
				phone: this.state.phone,
				code: this.state.code
            });
            firebase.auth().signInWithCustomToken(data.token)
			console.log('response', response);
		} catch (err) {
			console.log(err);
		}
	};
	render() {
		return (
			<View>
				<View style={{ marginBottom: 10 }}>
					<Text>Enter phone number</Text>
					<Input value={this.state.phone} onChangeText={(phone) => this.setState({ phone })} />
				</View>
				<View style={{ marginBottom: 10 }}>
					<Text>Enter Code</Text>
					<Input value={this.state.code} onChangeText={(code) => this.setState({ code })} />
				</View>
				<Button onPress={this.handleSubmit} title="Submit" />
			</View>
		);
	}
}

export default SignInForm;
