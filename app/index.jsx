import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import * as actions from './actions'
import io from 'socket.io-client'


let store = createStore(rootReducer);
let rootElement = document.getElementById('root');
export const socket = io('192.168.0.9:3000');

socket.on('connect', () => store.dispatch(actions.changeUsername("Noname")));
socket.on('join lobby', (nickname) => store.dispatch(actions.joinUser(nickname)));
socket.on('leave lobby', (nickname) => store.dispatch(actions.removeUser(nickname)));
socket.on('joined room', (nickname) => store.dispatch(actions.joinUser(nickname)));
socket.on('chat message', ({nickname, text}) => store.dispatch(actions.addUserMessage(nickname, text)));
socket.on('update rooms', (data) => store.dispatch(actions.updateRooms(data)));
socket.on('disconnect', () => console.log('Disconnect'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);