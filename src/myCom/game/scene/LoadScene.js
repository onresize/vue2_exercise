import Phaser from "phaser";
import { GAME_WIDTH, GAME_HEIGHT } from "../config";
import { game } from "../index";

export default class LoadScene extends Phaser.Scene {
  constructor() {
    super({ key: "LoadScene" });
    this.SCENE_CONTAINER;
  }
  preload() {
    this.load.on("progress", (progress) => {
      game.events.emit("loadAssets", progress);
    });
    this.load.image("bg", "bg.jpeg");
  }
  create() {
    this.scene.start("StartScene");
  }
  update() {}
}
