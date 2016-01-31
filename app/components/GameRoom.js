import React, { Component, PropTypes } from 'react'
import Game from '../game'

let game = new Game();

export default class GameRoom extends Component {

    componentDidMount(){
        game.show('game-window')
    }

    componentWillUnmount(){
        game.hide()
    }

    render() {
        return (
            <div>
                Room {this.props.id}
                Users: {this.props.usersCount}
                <div id='game-window'></div>
                <button onClick={() => this.props.onRoomLeave()}>
                    Leave room
                </button>
            </div>
        )
    }
}