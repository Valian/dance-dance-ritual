import React, { Component } from 'react';
import RoomList from './components/RoomList'
import { connect } from 'react-redux'

export class App extends Component {
  render() {
    const { dispatch, rooms } = this.props
    return (
      <div className="app">
        <RoomList
            rooms={rooms}
            onRoomClick={ id =>
              console.log('clicked room', id)
            } />
      </div>
    );
  }
}


// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    rooms: state.rooms
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App)