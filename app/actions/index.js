import * as types from '../constants/ActionTypes'
import * as messages from '../constants/MessageTypes'
import { socket } from '../../app';

export function joinUser(nickname) {
    return { type: types.USER_JOINED, nickname}
}

export function removeUser(nickname) {
    return { type: types.USER_LEFT, nickname}
}

export function moveUserToRoom(nickname) {
    return { type: types.USER_MOVED_TO_ROOM, nickname}
}

export function updateRooms(rooms) {
    return { type: types.ROOMS_UPDATED, rooms}
}

export function addUserMessage(nickname, text) {
    return { type: types.ADD_MESSAGE, messageType: messages.USER_MESSAGE, nickname, text}
}

export function addSystemMessage(text) {
    return { type: types.ADD_MESSAGE, messageType: messages.SYSTEM_MESSAGE, text}
}

export function newUserMessage(text) {
    socket.emit('chat message', text);
    return { type: types.ADD_MESSAGE, messageType: messages.NEW_MESSAGE, text}
}

export function changeUsername(nickname) {
    socket.emit('log in', nickname)
    return { type: types.CHANGE_USERNAME, nickname}
}