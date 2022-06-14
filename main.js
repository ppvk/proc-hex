import {Renderer} from "./lib/renderer.js";
import {MapData, Dice} from "./lib/generate.js";

async function main() {

  // This sets the dimensions of the generated map.
  let map = new MapData(50, 50);

  let renderer = new Renderer(map);
  await renderer.draw();

  console.log(map.data);
}

main();
