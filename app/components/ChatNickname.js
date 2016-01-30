import React, { Component } from 'react'

export default class ChatNickname extends Component {
    handleSubmit(event) {
		event.preventDefault();
		const input = this.refs.messageInput;
		this.props.changeNickname(input.value.trim());
		input.value = '';
	}

	render() {
		return (
			<form onSubmit={(text) => this.handleSubmit(text)}>
                <label>Nickname</label>
				<input ref='messageInput' type="text"/>
				<button>Change</button>
			</form>
		);
	}
}