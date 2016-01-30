import * as types from '../constants/ActionTypes.js'

export default function waitroom(state = [], action = { type: undefined}) {
  switch(action.type) {
    case types.ROOMS_UPDATED:
      return action.rooms
    default:
      return state
  }
}