import React, { Component } from 'react'

export default class ChatMessage extends Component {
    render() {
        return (
            <li className='clearfix'>
                <div className="chat-body clearfix">
                    <strong className={this.props.type + ' primary-font'}>{this.props.author}</strong>: {this.props.text}
                </div>
            </li>
        )
    }
}