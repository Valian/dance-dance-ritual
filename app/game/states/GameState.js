import RainbowText from '../objects/RainbowText';
import PlayerBase from '../objects/PlayerBase';

let scaleSize = 8.54;

//Background
var BackgroundFar;

var BackgroundBushesRain = {};

var BackgroundBushesSun = {};

//Banners
var BannerSun;
var BunnerRain;

var Players = {};

class GameState extends Phaser.State {

	preload() {

    	this.game.load.image('BackgroundFarTexture', '/static/GFX/Background/Background.png');
		this.game.load.image('BackgroundBushRainTexture', '/static/GFX/RainEnviroment/Bush.png');
		this.game.load.image('BackgroundBushSunTexture', '/static/GFX/SunEnviroment/Bush.png');
		this.game.load.image('BannerSunTexture', '/static/GFX/Banners/SunBannerIdle.png');
		this.game.load.image('BannerRainTexture', '/static/GFX/Banners/RainBannerIdle.png');

		//players;
		this.game.load.image('PeasantsBlue1Texture', '/static/GFX/Peasants/Peasant1.png');
	}

	create() {

		this.drawBuses();
		this.drawBanners();

		Players.tmpPlayer = new PlayerBase('Dupacz', 'Czerwoni', 1, 'PeasantsBlue1Texture', this.game);
		this.moveSprite(tmpPlayer, 400, 300);
	}

	createPixelArtSpriteFromTexture(TextureString){
		let mySprite = this.game.add.sprite(0, 0, TextureString);
		mySprite.smoothed = false;
		mySprite.scale.setTo(scaleSize,scaleSize);
		return mySprite;
	}

	moveSprite(sprite, targetX, targetY)
	{
		sprite.x = targetX;
		sprite.y = targetY;
	}

	drawBuses()
	{
		this.BackgroundFar = this.createPixelArtSpriteFromTexture('BackgroundFarTexture');

		BackgroundBushesRain.bush1 = (this.createPixelArtSpriteFromTexture('BackgroundBushRainTexture'));
		this.moveSprite(BackgroundBushesRain.bush1,530,130);

		BackgroundBushesRain.bush3 = this.createPixelArtSpriteFromTexture('BackgroundBushRainTexture');
		this.moveSprite(BackgroundBushesRain.bush3,730,125);

		BackgroundBushesRain.bush2 = this.createPixelArtSpriteFromTexture('BackgroundBushRainTexture');
		this.moveSprite(BackgroundBushesRain.bush2,630,150);

		BackgroundBushesRain.bush4 = this.createPixelArtSpriteFromTexture('BackgroundBushRainTexture');
		this.moveSprite(BackgroundBushesRain.bush4,870,140);

		BackgroundBushesSun.bush1 = this.createPixelArtSpriteFromTexture('BackgroundBushSunTexture');
		this.moveSprite(BackgroundBushesSun.bush1,10,125);

		BackgroundBushesSun.bush3 = this.createPixelArtSpriteFromTexture('BackgroundBushSunTexture');
		this.moveSprite(BackgroundBushesSun.bush3,210,135);

		BackgroundBushesSun.bush2 = this.createPixelArtSpriteFromTexture('BackgroundBushSunTexture');
		this.moveSprite(BackgroundBushesSun.bush2,110,145);

		BackgroundBushesSun.bush4 = this.createPixelArtSpriteFromTexture('BackgroundBushSunTexture');
		this.moveSprite(BackgroundBushesSun.bush4,360,130);
	}

	drawBanners()
	{
		this.BannerSun = this.createPixelArtSpriteFromTexture('BannerSunTexture');
		this.moveSprite(this.BannerSun,220,350);

		this.BunnerRain = this.createPixelArtSpriteFromTexture('BannerRainTexture');
		this.moveSprite(this.BunnerRain,660,350);
	}



}

export default GameState;