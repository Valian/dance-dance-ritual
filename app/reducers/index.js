import { combineReducers } from 'redux'
import waitroom from './waitroom'

const rootReducer = combineReducers({
  rooms: waitroom
})

export default rootReducer