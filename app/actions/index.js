import * as types from '../constants/ActionTypes'

export function joinUser(nickname) {
    return { type: types.JOIN_ROOM, nickname}
}

export function createRoom(id, name, usersCount, maxUsers) {
    return { type: types.CREATE_ROOM, id, name, maxUsers, usersCount}
}

export function removeRoom(id) {
    return { type: types.REMOVE_ROOM, id}
}

export function updateRoom(id, currentUsers) {
    return { type: types.UPDATE_ROOM, id, currentUsers}
}