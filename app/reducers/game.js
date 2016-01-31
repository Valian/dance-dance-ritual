import * as types from '../constants/ActionTypes'
import { assign } from 'lodash'

let initialData = {
  playersList: [],
  score: 0,
  bpm: 0,
  myId: -1,
  songId: null,
  seed: null,
  startingTimeInMiliseconds: null
};

export default function game(state = initialData, action = { type: undefined}) {
  switch(action.type) {
    case type.GAME_INIT:
      return assign({}, state, {
        seed: action.seed,
        bpm: action.bpm,
        songId: action.songId
      });
    case type.GAME_TEAM_UPDATE:
      return assign({}, state, {
        playersList: action.playersList,
        myId: action.myId
      });
    case type.GAME_START:
      return assign({}, state, {
        startingTimeInMiliseconds: new Date().getTime()
      });
    default:
      return state
  }
}