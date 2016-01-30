import React, { Component } from 'react';
import RoomList from './components/RoomList'
import ChatPanel from './components/ChatPanel'
import { newUserMessage } from './actions'
import { connect } from 'react-redux'

export class App extends Component {
  render() {
    const { dispatch, rooms, chat } = this.props
    return (
      <div className="well">
        <RoomList
            rooms={rooms}
            onRoomClick={ id =>
              console.log('clicked room', id)
            } />
        <ChatPanel
            messages={chat.messages} usersCount={chat.usersCount}
            newMessage={(text) => dispatch(newUserMessage(text))} />
      </div>
    );
  }
}


// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    rooms: state.rooms,
    chat: state.chat
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App)