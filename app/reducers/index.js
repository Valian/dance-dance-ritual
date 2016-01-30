import { combineReducers } from 'redux'
import waitroom from './waitroom'
import chat from './chat'

const rootReducer = combineReducers({
  rooms: waitroom,
  chat: chat
})

export default rootReducer