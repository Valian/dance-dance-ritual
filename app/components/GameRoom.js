import React, { Component, PropTypes } from 'react'

export default class GameRoom extends Component {
    render() {
        return (
            <div>
                Room {this.props.id}
                Users: {this.props.usersCount}
                <button onClick={() => this.props.onRoomLeave()}>
                    Leave room
                </button>
            </div>
        )
    }
}