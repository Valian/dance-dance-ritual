import * as types from '../constants/ActionTypes.js'
import { assign } from 'lodash'

let initialData = {
  all: [],
  currentRoomId: null
}

export default function waitroom(state = initialData, action = { type: undefined}) {
  switch(action.type) {
    case types.ROOMS_UPDATED:
      return assign({}, state, {
        all: action.rooms
      })
    case types.JOIN_ROOM:
      return assign({}, state, {
        currentRoomId: action.id
      })
    case types.LEAVE_ROOM:
      return assign({}, state, {
        currentRoomId: null
      })
    default:
      return state
  }
}