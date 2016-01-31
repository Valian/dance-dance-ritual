import GameState from './states/GameState';

let container = "game-inner-container"
let outerContainer = "game-container"

export default class Game extends Phaser.Game {

	constructor() {
		super(500, 500, Phaser.AUTO, container, null);
		this.state.add('GameState', GameState, false);
	}

  show(elemId) {
    this.elemId = elemId;
    $('#' + outerContainer + ' > div').detach().appendTo('#' + elemId)
    this.state.start('GameState');
  }

  hide(){
    var elem = this.elemId || outerContainer
    $('#' + elem + ' > div').detach().appendTo('#' + outerContainer)
  }

}