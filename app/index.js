import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { createRoom } from './actions'

let store = createStore(rootReducer)
let rootElement = document.getElementById('root')

store.dispatch(createRoom(5, 'Dupa', 5, 10))
store.dispatch(createRoom(5, 'Duperaa', 5, 10))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);