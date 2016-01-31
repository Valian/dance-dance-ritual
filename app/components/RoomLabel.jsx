import React, { Component, PropTypes } from 'react'

export default class RoomLabel extends Component {
    render() {
        var isFull = (usersCount, maxCount) => usersCount === maxCount;
        var bclass = isFull(this.props.usersCount, this.props.maxUsers) 
                        ? "list-group-item list-group-item-danger disabled" : "list-group-item list-group-item-success";
        return (              
                <button className = {bclass}  onClick={() => this.props.onRoomClick(this.props.id)}>
                    Click to join {this.props.name} ({this.props.usersCount} / {this.props.maxUsers})     
                </button>
        )
    }
}

RoomLabel.propTypes = {
    'onRoomClick': PropTypes.func,
    'name': PropTypes.string.isRequired,
    'id': PropTypes.number.isRequired,
    'usersCount': PropTypes.number.isRequired,
    'maxUsers': PropTypes.number.isRequired
}

RoomLabel.defaultProps = {
    onRoomClick: () => undefined
}