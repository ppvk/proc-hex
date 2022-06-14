import {MapData} from "./generate.js";

export class Renderer {
  constructor(map) {
    this.data = map.data;
    this.width = map.width;
    this.height= map.height;
  }

  async draw() {
    await document.fonts.load('10px unifont, unifont_upper');
    let canvas = document.createElement('canvas');
    let context = canvas.getContext("2d");
    document.querySelector("#map").appendChild(canvas);

    let hexagonAngle = 0.523598776; // 30 degrees in radians
    let sideLength = 22;
    let hexHeight = Math.sin(hexagonAngle) * sideLength;
    let hexRadius = Math.cos(hexagonAngle) * sideLength;
    let hexRectangleHeight = sideLength + 2 * hexHeight;
    let hexRectangleWidth = 2 * hexRadius;

    let data = this.data;
    function drawHex(x, y, hex) {


      let hex_x = x;
      let hex_y = y;
      let id = MapData.getId(hex_x, hex_y);

      x = x * (hexRectangleWidth) + 2;
      y = y * (sideLength*1.5) + 2;

      if (hex_y%2 != 0) {
        x += (hexRectangleWidth + 1) / 2;
      }

      x = Math.round(x);
      y = Math.round(y);

      context.fillStyle = data[id].fill;
      context.strokeStyle = "#000";
      context.lineCap = "round";
      context.lineWidth = 2;
      context.imageSmoothingEnabled = false;

      context.beginPath();
      context.moveTo(x + hexRadius, y);
      context.lineTo(x + hexRectangleWidth, y + hexHeight);
      context.lineTo(x + hexRectangleWidth, y + hexHeight + sideLength);
      context.lineTo(x + hexRadius, y + hexRectangleHeight);
      context.lineTo(x, y + sideLength + hexHeight);
      context.lineTo(x, y + hexHeight);
      context.closePath();
      context.stroke();

      context.fill();




    }

    function drawRivers(x, y, hex) {
      let hex_x = x;
      let hex_y = y;
      let id = MapData.getId(hex_x, hex_y);

      x = x * (hexRectangleWidth) + 2;
      y = y * (sideLength*1.5) + 2;

      if (hex_y%2 != 0) {
        x += (hexRectangleWidth + 1) / 2;
      }

      x = Math.round(x);
      y = Math.round(y);

      context.fillStyle = data[id].fill;
      context.strokeStyle = "#000";
      context.lineCap = "round";
      context.lineWidth = 2;
      context.imageSmoothingEnabled = false;

      if (hex.river && hex.river_to) {
        let neighbor = data[hex.river_to];

        if (neighbor.river) {

          let nx = (neighbor.x * (hexRectangleWidth) + 2);
          let ny = (neighbor.y * (sideLength*1.5) + 2);

          if (ny%2 != 0) {
            nx += (hexRectangleWidth + 1) / 2;
          }
          nx = Math.round(nx);
          ny = Math.round(ny);


          context.lineWidth = 1;
          context.strokeStyle = "#2389DA";
          context.fillStyle = "#2389DA";

          context.beginPath();
          context.arc(x+hexRadius, y+hexRadius, (5/2) * 1.5, 0, 2 * Math.PI);
          context.fill();

          context.lineWidth = 5 * 1.5;
          context.beginPath();
          context.moveTo(x + hexRadius, y + hexRadius);
          context.lineTo(nx + hexRadius, ny + hexRadius);
          context.closePath();
          context.stroke();

        }
      }

    }

    function drawLabels(x, y, hex) {
      let hex_x = x;
      let hex_y = y;
      let id = MapData.getId(hex_x, hex_y);

      x = x * (hexRectangleWidth) + 2;
      y = y * (sideLength*1.5) + 2;

      if (hex_y%2 != 0) {
        x += (hexRectangleWidth + 1) / 2;
      }

      x = Math.round(x);
      y = Math.round(y);

      context.fillStyle = data[id].fill;
      context.strokeStyle = "#000";
      context.lineCap = "round";
      context.lineWidth = 2;
      context.imageSmoothingEnabled = false;

      context.font = "16px unifont, unifont_upper";
      context.textAlign = "center";
      context.fillStyle = data[id].stroke;

      context.fillText(id, Math.round(x + hexRectangleWidth/2 - 1) , Math.round(y + hexRectangleHeight*0.76));

      context.font = "16px unifont, unifont_upper";
      context.fillText(data[id].glyph, Math.round(x + hexRectangleWidth/2), Math.round(y + hexRectangleHeight*0.46));
    }

    canvas.width = hexRectangleWidth * (this.width+0.5) + 5;
    canvas.height = sideLength * 1.5 * (this.height+0.5) + 1;

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        let hex = data[MapData.getId(x,y)];
        drawHex(x, y, hex);
      }
    }
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        let hex = data[MapData.getId(x,y)];
        drawRivers(x, y, hex);
      }
    }
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        let hex = data[MapData.getId(x,y)];
        drawLabels(x, y, hex);
      }
    }

  }
}
