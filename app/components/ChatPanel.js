import React, { Component } from 'react'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'

export default class ChatPanel extends Component {
    render() {
        return (
            <div className='panel panel-primary chat-panel'>
                <div className="panel-heading stats">
                    Users in lobby: <strong>{this.props.usersCount}</strong>
                </div>
                <div className="panel-body">
                    <ul className="chat">
                        {this.props.messages.map((message, index) =>
                            <ChatMessage
                                key={index}
                                {...message} />
                        )}
                    </ul>
                </div>
                <div className='panel-footer'>
                    <ChatInput newMessage={this.props.newMessage} />
                </div>
            </div>
        )
    }
}

//<ChatNickname changeNickname={this.props.changeNickname} />

ChatPanel.defaultProps = {
    newMessage: (text) => undefined
}