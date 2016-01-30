import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { updateRooms, joinUser, addUserMessage, removeUser } from './actions'
import io from 'socket.io-client'

let store = createStore(rootReducer)
let rootElement = document.getElementById('root')
export const socket = io('192.168.61.147:3000');

socket.on('connect', () => console.log('Connect'));
socket.emit('log in', 'name')
socket.on('event', (data) => console.log('event'));
socket.on('disconnect', () => console.log('Disconnect'));


let rooms = [{id: 5, name: 'Dupa', usersCount: 5, maxUsers: 10}]
store.dispatch(updateRooms(rooms))
store.dispatch(joinUser("Debil"))
store.dispatch(addUserMessage("Debil", "costam"))
store.dispatch(addUserMessage("Debil", "costam"))
store.dispatch(addUserMessage("Debil", "costam"))
store.dispatch(removeUser("Debil"))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);