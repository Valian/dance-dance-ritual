import React, { Component } from 'react';
import RoomList from './components/RoomList'
import ChatPanel from './components/ChatPanel'
import { newUserMessage, changeUsername } from './actions'
import { connect } from 'react-redux'

export class App extends Component {
  render() {
    const { dispatch, rooms, chat } = this.props
    return (
      <div className="well">
        <div className="col-md-7">
            <RoomList
                rooms={rooms}
                onRoomClick={ id =>
                  console.log('clicked room', id)
                } />
        </div>
        <div className="col-md-5">
            <ChatPanel
                messages={chat.messages} usersCount={chat.usersCount}
                newMessage={(text) => dispatch(newUserMessage(text))}
                changeNickname={(nickname) => dispatch(changeUsername(nickname))} />
        </div>
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