import { Component } from 'react'
import { USER_JOINED, USER_LEFT, USER_MOVED_TO_ROOM, ADD_MESSAGE } from '../constants/ActionTypes'
import { SYSTEM_MESSAGE, USER_MESSAGE } from '../constants/MessageTypes'
import { addUserMessage, addSystemMessage } from '../actions'
import { assign, findIndex, find } from 'lodash'

let initialState = {
    messages: [],
    usersCount: 0
}

function changeUsersCount(state, change) {
    return assign({}, state, {
        usersCount: state.usersCount + change
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
            state = chat(state, addSystemMessage('User joined lobby'))
            return changeUsersCount(state, 1)

        case USER_LEFT:
            state = chat(state, addSystemMessage('User left lobby'))
            return changeUsersCount(state, -1)

        case USER_MOVED_TO_ROOM:
            state = chat(state, addSystemMessage('User moved to room'))
            return changeUsersCount(state, -1)

        case ADD_MESSAGE:
            return addMessage(state, {
                type: action.messageType,
                text: action.text,
                author: action.messageType == SYSTEM_MESSAGE ? 'SYSTEM' : action.nickname
            })

        default:
            return state
    }
}