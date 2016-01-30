import React, { Component } from 'react'

export default class ChatInput extends Component {
    handleSubmit(event) {
		event.preventDefault();
		const input = this.refs.messageInput;
		this.props.newMessage(input.value.trim());
		input.value = '';
	}

	render() {
		return (
			<form onSubmit={(text) => this.handleSubmit(text)}>
				<input ref='messageInput' type="text"/>
				<button>Send</button>
			</form>
		);
	}
}