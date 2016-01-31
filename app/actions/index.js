import * as types from '../constants/ActionTypes'
import * as messages from '../constants/MessageTypes'
import { socket } from '../index.jsx';

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
    socket.emit('log in', nickname);
    return { type: types.CHANGE_USERNAME, nickname}
}

export function joinRoom(id) {
    socket.emit('join room', id);
    return { type: types.JOIN_ROOM, id}
}

export function leaveRoom() {
    socket.emit('leave room');
    return { type: types.LEAVE_ROOM}
}

export function playerReady() {
    socket.emit('player ready');
    return { type: types.PLAYER_READY}
}

export function gameInit(seed, bpm, songId) {
    return { type: types.GAME_INIT, seed, bpm, songId}
}

export function gameUpdateTeam(myId, playersList) {
    return { type: types.GAME_TEAM_UPDATE, myId, playersList}
}

export function gameStart() {
    //TODO
    return { type: types.GAME_START}
}