const EventEmitter = require("events");

class Player extends EventEmitter {}

var player = new Player();

player.once("play", track => {
  console.log(`正在播放： 《${track}》`);
});

player.emit("play", "再见理想");
player.emit("play", "海阔天空");
