import { Component } from 'react'
import { USER_JOINED, USER_LEFT, USER_MOVED_TO_ROOM, ADD_MESSAGE, CHANGE_USERNAME} from '../constants/ActionTypes'
import { SYSTEM_MESSAGE, USER_MESSAGE, NEW_MESSAGE} from '../constants/MessageTypes'
import { addUserMessage, addSystemMessage } from '../actions'
import { assign, findIndex, find } from 'lodash'

let initialState = {
    messages: [],
    usersCount: 0,
    nickname: 'me'
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

function changeUsername(state, nickname) {
    return assign({}, state, {
        nickname: nickname
    })
}

export default function chat(state = initialState, action = { type: undefined }) {
    switch(action.type) {
        case USER_JOINED:
            state = chat(state, addSystemMessage('User ' + action.nickname + ' joined.'))
            return changeUsersCount(state, 1)

        case USER_LEFT:
            state = chat(state, addSystemMessage('User ' + action.nickname + ' left.'))
            return changeUsersCount(state, -1)

        case USER_MOVED_TO_ROOM:
            state = chat(state, addSystemMessage('User moved to room'))
            return changeUsersCount(state, -1)

        case ADD_MESSAGE:
            var author = action.nickname
            switch(action.messageType) {
                case NEW_MESSAGE:
                    author = state.nickname
                    break
                case SYSTEM_MESSAGE:
                    author = 'SYSTEM'
                    break
            }
            return addMessage(state, {
                type: action.messageType,
                text: action.text,
                author: author
            })

        case CHANGE_USERNAME:
            return changeUsername(state, action.nickname)

        default:
            return state
    }
}