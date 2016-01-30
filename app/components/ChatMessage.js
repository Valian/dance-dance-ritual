import React, { Component } from 'react'

export default class ChatMessage extends Component {
    render() {
        return (
            <li className={this.props.type}>
                {this.props.author}: {this.props.text}
            </li>
        )
    }
}