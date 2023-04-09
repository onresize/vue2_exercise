import Phaser from "phaser";
import { GAME_WIDTH, GAME_HEIGHT } from "./config";
import LoadScene from "./scene/LoadScene";
import StartScene from "./scene/StartScene";

export let game;

export default function launchGame(parent, option) {
  // const isLandscape = window.orientation == 90 || window.orientation == -90;
  // let windowRatio =
  //   document.documentElement.clientWidth /
  //   document.documentElement.clientHeight;
  // windowRatio = isLandscape ? 1 / windowRatio : windowRatio;
  // let gameRatio = GAME_WIDTH / GAME_HEIGHT

  //const width =document.documentElement.clientWidth-100
  // const width = GAME_WIDTH; 
  // let height = document.documentElement.clientWidth;
  // let width = height * gameRatio;

  // if(isLandscape){
  //   height = document.documentElement.clientHeight;
  //   width = height * gameRatio;
  // }

  const config = {
    type: Phaser.AUTO,
    autoFocus: true,
    // pixelArt: true,
    // roundPixels: true,
    // antialias: false,
    backgroundColor: 0x000000,
    scale: {
      width:GAME_WIDTH,
      height:GAME_HEIGHT,
      mode: Phaser.Scale.ScaleModes.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      parent,
    },
    customEnvironment: false,
    dom: {
      createContainer: true,
    },
    scene: [LoadScene, StartScene],
  };
  game = new Phaser.Game(config);
  game.globalData = {
    ...option,
  };
  return game;
}
