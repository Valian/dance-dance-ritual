import * as types from '../constants/ActionTypes'
import * as messages from '../constants/MessageTypes'

export function joinUser(nickname, id) {
    return { type: types.USER_JOINED, nickname, id}
}

export function removeUser(id) {
    return { type: types.USER_LEFT, id}
}

export function moveUserToRoom(id) {
    return { type: types.USER_MOVED_TO_ROOM, id}
}


export function updateRooms(rooms) {
    return { type: types.ROOMS_UPDATED, rooms}
}

export function addUserMessage(id, text) {
    return { type: types.ADD_MESSAGE, messageType: messages.USER_MESSAGE, id, text}
}

export function addSystemMessage(text) {
    return { type: types.ADD_MESSAGE, messageType: messages.SYSTEM_MESSAGE, id: -1, text}
}