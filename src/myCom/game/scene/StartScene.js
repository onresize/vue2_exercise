import Phaser from "phaser";

export default class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: "StartScene" });
    this.MAIN_CONTAINER;
  }
  preload() {}
  init() {
    const { width, height } = this.scale.baseSize;
    this.MAIN_CONTAINER = new Phaser.GameObjects.Container(this, 0, 0);
    this.add.displayList.add(this.MAIN_CONTAINER);
    this.add.displayList.addCallback = (gameObj) => {
      this.MAIN_CONTAINER.add(gameObj);
    };

    this.events.on("create", () => {
      console.log('create')
      if (window.orientation == 90 || window.orientation == -90) {
        this.MAIN_CONTAINER.setAngle(0);
        this.MAIN_CONTAINER.setX(0);
        return;
      }
      this.MAIN_CONTAINER.setAngle(90);
      this.MAIN_CONTAINER.setX(height);
      this.scale.setGameSize(height,width);
    });
    window.addEventListener("orientationchange", () => {
      console.log('orientationchange')
      const { width, height } = this.scale.baseSize;
      if (window.orientation == 90 || window.orientation == -90) {
        this.MAIN_CONTAINER.setAngle(0);
        this.MAIN_CONTAINER.setX(0);
      } else {
        this.MAIN_CONTAINER.setAngle(90);
        this.MAIN_CONTAINER.setX(height);
      }
      this.scale.setGameSize(height, width);
    });
  }
  create() {
    this.bg = this.add.image(0, 0, "bg").setOrigin(0).setDepth(1)
    const { width, height } = this.scale.baseSize;
    console.log(this)
    let btn = this.add.text(width/2,250,"click to scene",{
      font: "48px monospace",
      color: "white"
    }).setOrigin(0.5).setDepth(2).setShadow(5, 5, "#5588EE", 0, true, true);
    btn.setInteractive().on("pointerdown", () => {
      console.log('click')
    });
  }
  update() {}
}
