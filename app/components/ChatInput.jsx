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
				<form className="form" onSubmit={(text) => this.handleSubmit(text)}>
					<div className="input-group">
						<input id="btn-input" ref="messageInput" type="text" className="form-control input-sm" placeholder="Type your message here..." />
						<span className="input-group-btn">
							<button className="btn btn-warning btn-sm" id="btn-chat">Send</button>
						</span>
					</div>
				</form>
		);
	}
}