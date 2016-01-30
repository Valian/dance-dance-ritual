import * as types from '../constants/ActionTypes.js'

export default function waitroom(state = [], action) {
  console.log(action)
  switch(action.type) {
    case types.JOIN_ROOM:
      return [
        ...state,
        {
          nickname: action.nickname
        }]
    case types.CREATE_ROOM:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          maxUsers: action.maxUsers,
          usersCount: action.usersCount
        }]
    default:
      return state
  }
}