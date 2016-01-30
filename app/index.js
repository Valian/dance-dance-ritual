import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { updateRooms, joinUser, addUserMessage } from './actions'
import io from 'socket.io-client'

let store = createStore(rootReducer)
let rootElement = document.getElementById('root')
let socket = io('http://salty-plains-44159.herokuapp.com/');

socket.on('connect', () => console.log('Connect'));
socket.on('event', (data) => console.log('event'));
socket.on('disconnect', () => console.log('Disconnect'));

let rooms = [{id: 5, name: 'Dupa', usersCount: 5, maxUsers: 10}]
store.dispatch(updateRooms(rooms))
store.dispatch(joinUser("Debil", 1))
store.dispatch(addUserMessage(1, "costam"))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);