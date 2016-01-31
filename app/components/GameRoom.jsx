import React, { Component, PropTypes } from 'react'
import Game from '../game'

var game = null;

class GameStats extends Component {

    render() {
        return (
            <div>
                <div className="row">Room {this.props.id}</div>
                <div className="row">Users: {this.props.usersCount}</div>
            </div>
        )
    }
}

export default class GameRoom extends Component {

    componentDidMount(){
        if(game === null) {
            game = new Game();
        }
        game.show('game-window')
    }

    componentWillUnmount(){
        game.hide()
    }

    render() {
        return (
            <div className="row">
                <GameStats id={this.props.id} usersCount={this.props.usersCount} />
                <div id='game-window' className="col-md-12"></div>
                <button onClick={() => this.props.onRoomLeave()}>
                    Leave room
                </button>
            </div>
        )
    }
}