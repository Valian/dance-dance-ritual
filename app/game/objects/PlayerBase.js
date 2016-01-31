class PlayerBase extends Phaser.Sprite {

	constructor(newUsername, newTeam, newOrderInTeam, textureName, game){
		super(game, 0,0, textureName);
		this.username = newUsername;
		this.team = newTeam;
		this.orderInTeam = newOrderInTeam;
		this.scale.setTo(8.54,8.54);
		this.smoothed = false;

		game.stage.addChild(this);
	}
}

export default PlayerBase;