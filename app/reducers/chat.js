import { Component } from 'react'
import { USER_JOINED, USER_LEFT, USER_MOVED_TO_ROOM, ADD_MESSAGE } from '../constants/ActionTypes'
import { SYSTEM_MESSAGE, USER_MESSAGE } from '../constants/MessageTypes'
import { addUserMessage, addSystemMessage } from '../actions'
import { assign, findIndex, find } from 'lodash'

let initialState = {
    messages: [],
    users: []
}

function removeUser(state, id) {
    var index = findIndex(state.users, (u) => u.id == id)
    if(index == -1) {
        return state
    }
    return assign({}, state, {
        users: state.users.slice(index, 1)

    })
}

function addUser(state, user) {
    return assign({}, state, {
        users: [...state.users, user]
    })
}

function addMessage(state, message) {
    return assign({}, state, {
        messages: [...state.messages, message]
    })
}

export default function chat(state = initialState, action = { type: undefined }) {
    switch(action.type) {
        case USER_JOINED:
            return addUser(state, {
                nickname: action.nickname,
                id: action.id
            })

        case USER_LEFT:
            state = chat(state, addSystemMessage('User left channel'))
            return removeUser(state, action.id)

        case USER_MOVED_TO_ROOM:
            state = chat(state, addSystemMessage('User moved to room'))
            return removeUser(state, action.id)

        case ADD_MESSAGE:
            var author = find(state.users, (u) => u.id == action.id)
            return addMessage(state, {
                type: action.messageType,
                text: action.text,
                author: action.messageType == SYSTEM_MESSAGE ? 'SYSTEM' : author
            })

        default:
            return state
    }
}