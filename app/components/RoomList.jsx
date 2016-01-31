import React, { Component, PropTypes } from 'react';
import RoomLabel from './RoomLabel.jsx'
import { sumBy } from 'lodash'

export default class RoomList extends Component {
    render() {
        return (
            <div className="room-list">
                <div className="stats">
                    Users in games: { sumBy(this.props.rooms, (o) => o.usersCount)}
                </div>
                <ul>
                    {this.props.rooms.map((room, index) =>
                        <RoomLabel
                            {...room}
                            key={index}
                            onRoomClick={this.props.onRoomClick}
                            />)}
                </ul>
            </div>
        )
    }
}

RoomList.propTypes = {
    onRoomClick: PropTypes.func.isRequired,
    rooms: PropTypes.arrayOf(
        PropTypes.shape(RoomLabel.propTypes).isRequired
    ).isRequired
}