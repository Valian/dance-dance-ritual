import React, { Component, PropTypes } from 'react';
import Room from './Room'
import { sumBy } from 'lodash'

export default class RoomList extends Component {
    render() {
        return (
            <div className="room-list">
                <div className="stats">
                    Online users: { sumBy(this.props.rooms, (o) => o.usersCount)}
                </div>
                <ul>
                    {this.props.rooms.map((room, index) =>
                        <Room
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
        PropTypes.shape(Room.propTypes).isRequired
    ).isRequired
}