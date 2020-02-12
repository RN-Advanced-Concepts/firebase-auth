import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-dbf0a.cloudfunctions.net';
class SignUpForm extends Component {
	state = { phone: '' }; // ES-2017

	handleSubmit = async () => {
		try {
			await axios.post(`${ROOT_URL}/createUser`, {
				phone: this.state.phone
			});

			await axios.post(`${ROOT_URL}/requestOneTimePassword`, {
				phone: this.state.phone
			});
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
				<Button onPress={this.handleSubmit} title="Submit" />
			</View>
		);
	}
}

export default SignUpForm;
