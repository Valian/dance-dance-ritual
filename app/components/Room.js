import React, { Component, PropTypes } from 'react'

export default class Room extends Component {
    render() {
        return (
            <li>
                {this.props.name} ({this.props.usersCount} / {this.props.maxUsers})
                <button onClick={() => this.props.onRoomClick(this.props.id)}>
                    Join room
                </button>
            </li>
        )
    }
}

Room.propTypes = {
    'onRoomClick': PropTypes.func,
    'name': PropTypes.string.isRequired,
    'id': PropTypes.number.isRequired,
    'usersCount': PropTypes.number.isRequired,
    'maxUsers': PropTypes.number.isRequired
}

Room.defaultProps = {
    onRoomClick: () => undefined
}