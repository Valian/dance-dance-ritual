import React, { Component } from 'react';
import RoomList from './components/RoomList.jsx'
import ChatPanel from './components/ChatPanel.jsx'
import GameRoom, { GameStats } from './components/GameRoom.jsx'
import * as actions from './actions'
import { connect } from 'react-redux'
import { find } from 'lodash'

function renderWaitroom(dispatch, rooms, chat) {

  return (
    <div className="well">
      <div className="row">
        <div className="col-md-7">
            <RoomList
            rooms={rooms}
            onRoomClick={(id) => dispatch(actions.joinRoom(id))} />
        </div>
        <div className="col-md-5">
            <ChatPanel
                messages={chat.messages} usersCount={chat.usersCount}
                newMessage={(text) => dispatch(actions.newUserMessage(text))}
                changeNickname={(nickname) => dispatch(actions.changeUsername(nickname))} />
        </div>
      </div>
    </div>
  )
}

function renderGame(currentRoom) {

  return (
    <div className="well">
      <div className="row">
        <GameRoom
          {...currentRoom}
          onRoomLeave={() => dispatch(actions.leaveRoom())} />
      </div>
    </div>
  )

}

export class App extends Component {
  render() {
    const { dispatch, rooms, chat, currentRoom} = this.props;
    if(currentRoom != null) {
      return renderGame(currentRoom);
    } else {
      return renderWaitroom(dispatch, rooms, chat);
    }
  }
}


// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    rooms: state.rooms.all,
    currentRoom: find(state.rooms.all, (r) => r.id == state.rooms.currentRoomId),
    chat: state.chat
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App);