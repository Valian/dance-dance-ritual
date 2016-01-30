import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { updateRooms, joinUser, addUserMessage, removeUser, changeUsername } from './actions'
import io from 'socket.io-client'

let store = createStore(rootReducer)
let rootElement = document.getElementById('root')
export const socket = io('192.168.43.111:3000');

socket.on('connect', () => store.dispatch(changeUsername(window.prompt("Enter your nickname", "Noname"))));
socket.on('join lobby', (nickname) => store.dispatch(joinUser(nickname)));
socket.on('leave lobby', (nickname) => store.dispatch(removeUser(nickname)));
socket.on('chat message', ({nickname, text}) => store.dispatch(addUserMessage(nickname, text)));
socket.on('update rooms', (data) => store.dispatch(updateRooms(data)));
socket.on('disconnect', () => console.log('Disconnect'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);