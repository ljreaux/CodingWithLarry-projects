import { EventBus } from "../EventBus";
import { Scene } from "phaser";

export class GameOver extends Scene {
  camera?: Phaser.Cameras.Scene2D.Camera;
  background?: Phaser.GameObjects.Image;
  gameOverText?: Phaser.GameObjects.Text;

  constructor() {
    super("GameOver");
  }

  create({ score }: { score: number }) {
    this.camera = this.cameras.main;
    this.camera.setBackgroundColor(0xff0000);

    this.background = this.add.image(512, 384, "background");
    this.background.setAlpha(0.5);

    const text = `Game Over
    Your Score: ${score}`;

    this.gameOverText = this.add
      .text(512, 384, text, {
        fontFamily: "Arial Black",
        fontSize: 64,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 8,
        align: "center",
      })
      .setOrigin(0.5)
      .setDepth(100);

    EventBus.emit("current-scene-ready", this);
    EventBus.emit("finalScore", { name: "finalScore", value: score });
  }

  changeScene() {
    this.scene.start("MainMenu");
  }
}