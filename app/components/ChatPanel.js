import React, { Component } from 'react'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'
import ChatNickname from './ChatNickname'

export default class ChatPanel extends Component {
    render() {
        return (
            <div className='chat-panel'>
                <div className="stats">
                    Users in lobby: {this.props.usersCount}
                </div>
                <ul>
                    {this.props.messages.map((message, index) =>
                        <ChatMessage
                            key={index}
                            {...message} />
                    )}
                </ul>
                <ChatInput newMessage={this.props.newMessage} />
            </div>
        )
    }
}

//<ChatNickname changeNickname={this.props.changeNickname} />

ChatPanel.defaultProps = {
    newMessage: (text) => undefined
}