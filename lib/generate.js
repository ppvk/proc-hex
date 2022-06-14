let assets = {};

import tiles from "../assets/tiles.mjs";
assets.tiles = tiles;

import monsters from "../assets/monsters.mjs";
assets.monsters = monsters;


export function roll(d) {
  let die = Math.floor(Math.random() * d) + 1;
  return die;
}


export class Dice {
  static roll(string) {
    let tokens = []

    if (string.includes("+")) {
      let plus = string.split("+");
      plus.forEach((part, i) => {
        tokens.push(part);
        if (i < plus.length - 1) {
          tokens.push("+");
        }
      });
    }

    if (string.includes("-")) {
      let minus = string.split("-");
      minus.forEach((part, i) => {
        tokens.push(part);
        if (i < minus.length - 1) {
          tokens.push("-");
        }
      });
    }

    if (string.includes("*")) {
      let times = string.split("*");
      times.forEach((part, i) => {
        tokens.push(part);
        if (i < times.length - 1) {
          tokens.push("*");
        }
      });
    }

    if (tokens.length == 0) {
      tokens.push(string);
    }

    tokens.forEach((token, i) => {
      if (token.includes("d")) {
        let parts = token.split("d");
        let dice = Number.parseInt(parts[0]);
        let size = Number.parseInt(parts[1]);
        let result = 0;

        for (let die = 0; die < dice; die++) {
          result += Math.floor(Math.random() * size) + 1;
        }
        tokens[i] = result
      }
    });

    tokens.forEach((token, i) => {
      if (token == "*") {
        let previous = Number.parseInt(tokens[i-1]);
        let next = Number.parseInt(tokens[i+1]);
        let result = previous * next;
        tokens.splice(i-1, 3, result);
      }

      if (token == "+") {
        let previous = Number.parseInt(tokens[i-1]);
        let next = Number.parseInt(tokens[i+1]);
        let result = previous + next;
        tokens.splice(i-1, 3, result);
      }

      if (token == "-") {
        let previous = Number.parseInt(tokens[i-1]);
        let next = Number.parseInt(tokens[i+1]);
        let result = previous - next;
        tokens.splice(i-1, 3, result);
      }
    });

    return tokens[0];
  }

}

export class MapData {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.data = {};

    let x_string, y_string;

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        let id = MapData.getId(x,y);
        this.data[id] = {
          "x": x,
          "y": y,
          "glyph": "?",
          "fill": "#fff",
          "stroke": "#000",
          "neighbors": []
        };

        if (x > 0) {
          this.data[id]["neighbors"].push(
            MapData.getId(x-1, y)
          );
        }
        if (x < width - 1) {
          this.data[id]["neighbors"].push(
            MapData.getId(x+1, y)
          );
        }
        if (y%2 == 0) {
          if (y > 0 && x > 0) {
            this.data[id]["neighbors"].push(
              MapData.getId(x-1, y-1)
            );
          }
          if (y < height - 1 && x > 0) {
            this.data[id]["neighbors"].push(
              MapData.getId(x-1, y+1)
            );
          }
          if (y > 0) {
            this.data[id]["neighbors"].push(
              MapData.getId(x, y-1)
            );
          }
          if (y < height - 1) {
            this.data[id]["neighbors"].push(
              MapData.getId(x, y+1)
            );
          }

        } else {
          if (y > 0) {
            this.data[id]["neighbors"].push(
              MapData.getId(x, y-1)
            );
          }
          if (y < height - 1) {
            this.data[id]["neighbors"].push(
              MapData.getId(x, y+1)
            );
          }


          if (y > 0 && x < width - 1) {
            this.data[id]["neighbors"].push(
              MapData.getId(x+1, y-1)
            );
          }
          if (y < height - 1 && x < width - 1) {
            this.data[id]["neighbors"].push(
              MapData.getId(x+1, y+1)
            );
          }

        }
      }
    }

    let finished = []
    let self = this;
    function setTile(x, y, terrain) {
      let id = MapData.getId(x, y);
      self.data[id] = Object.assign(
        self.data[id],
        assets.tiles[terrain]
      );
      finished.push(id);
    }

    let seeds = Math.round( (width * height)/(20 * 20) ) + 1;

    for (seeds; seeds > 0; seeds--) {
      setTile(
        Math.round(Math.random() * (width-1)),
        Math.round(Math.random() * (height-1)),
        assets.tiles.random.random_terrain[roll(6) + roll(6) - 2]
      );
    }


    // Flood fill all the hexes with terrain, using their random_terrain array.
    while(finished.length < width*height) {
      finished.forEach((id) => {
        if (roll(6) <= 2) {
          let thisHex = self.data[id];
          console.log(id, "is", thisHex.type);

          thisHex.neighbors.forEach((neighbor) => {
            neighbor = self.data[neighbor];
            let next_tile = undefined;

            while(next_tile == undefined) {
              let dieRoll = roll(6) + roll(6);
              next_tile = thisHex.random_terrain[dieRoll-2];

              neighbor.neighbors.forEach((other) => {
                other = self.data[other];

                if (other.glyph != "?" && next_tile != undefined) {
                  console.log("checking", next_tile, "against", other.type);
                  if (assets.tiles[next_tile].random_terrain.indexOf(other.type) < 0) {
                    console.log(other.type, "incompatible with", next_tile);
                    next_tile = undefined;
                  } else {
                    console.log("Setting neighbor to", next_tile);
                  }
                }
              });
            }

            setTile(neighbor.x, neighbor.y, next_tile);
          });


        }
      });
    }

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        let id = MapData.getId(x,y);
        let hex = self.data[id];

        if (hex.glyph == "?") {
          setTile(x, y,
            assets.tiles.random.random_terrain[roll(6) + roll(6) - 2]
          );
        }

      }
    }

    // Average out all the elevations
    for (let i = 0; i < 3; i++) {

      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          let id = MapData.getId(x,y);
          let hex = self.data[id];

          let average = hex.elevation;

          if (hex.type != "mountain" && hex.type != "desert") {
            hex.neighbors.forEach((neighbor) => {
              neighbor = self.data[neighbor];
              average = (neighbor.elevation + 2*average) / 3;
            });
          }
          hex.averaged_height = Math.round(average);
          //hex.fill = "rgb(" + (average/10*255) + "," + (average/10*255) + "," + (average/10*255) + ")"
        }
      }

      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          let id = MapData.getId(x,y);
          let hex = self.data[id];
          hex.elevation = hex.averaged_height;
        }
      }

    }


    // seed rivers
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        let id = MapData.getId(x,y);
        let hex = self.data[id];
        let neighbors = [];
        if (hex.type == "mountain" && hex.averaged_height > 6) {
          hex.neighbors.forEach((neighbor) => {
            neighbor = self.data[neighbor];
            neighbors.push(neighbor);
          });

          if (roll(6) <= 1) {
            hex.river = true;
          }
        }

      }
    }



    // expand rivers
    let river_loop = true;

    while(river_loop) {
      river_loop = false;
      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {

          let id = MapData.getId(x,y);
          let hex = self.data[id];
          if (hex.river) {

            if (hex.river_to == undefined) {
              river_loop = true;
              let options = [];

              hex.neighbors.forEach((neighbor) => {
                neighbor = self.data[neighbor];
                if (neighbor.river && neighbor.river_to != id  && neighbor.elevation < hex.elevation) {
                  if (hex.type == "swamp" && neighbor.type == "swamp") {

                  } else {
                    options.push(neighbor);
                  }
                } else {
                  if (
                    !neighbor.river &&
                    neighbor.elevation <= hex.elevation &&
                    neighbor.type != "mountain") {
                      if (hex.type == "swamp" && neighbor.type == "swamp") {

                      } else {
                        options.push(neighbor);
                      }
                  }
                }

              });

              options.sort(Math.random);

              options.sort(function(a, b) {
                return a.elevation - b.elevation;
              });

              if (options.length) {
                hex.river_to = MapData.getId(options[0].x, options[0].y);
                options[0].river = true;
              } else {
                hex.river_to = id;
                hex.fill = "#2389DA";
                hex.glyph = "~~~"
              }

            }

          }
        }
      }

      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          let id = MapData.getId(x,y);
          let hex = self.data[id];
          if (hex.river && hex.type == "desert") {
            hex.river = false;
          }
        }
      }
    }


    console.log(this.data);

    // Roll for features for each tile.
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        let id = MapData.getId(x,y);
        let hex = self.data[id];

        console.log(hex);

        let feature = hex.random_feature[
          roll(6) + roll(6) - 2
        ];

        if (feature) {

            if (roll(6) <= 3 || feature != "village") {
              if (assets.tiles[feature]) {
                self.data[id] = Object.assign(
                  self.data[id],
                  assets.tiles[feature]
                );
              }
            }

            // fords occasionally have an additional feature.
            if (feature == "ford") {
              let r = roll(6);
              let second_feature = null;
              if (r == 1) {
                second_feature = "lair";
              } else if (r == 6) {
                second_feature = "town";
              }
              if (second_feature) {
                self.data[id] = Object.assign(
                  self.data[id],
                  assets.tiles[second_feature]
                );
              }
            }

            // rivers in the woods occasionally have an additional feature
            if (feature == "river" && hex.type == "wood") {
              let r = roll(6);
              let second_feature = null;
              if (r == 1) {
                second_feature = "lair";
              } else if (r == 2) {
                second_feature = "stronghold";
              } else if (r == 6) {
                second_feature = "village";
              }
              if (second_feature) {
                self.data[id] = Object.assign(
                  self.data[id],
                  assets.tiles[second_feature]
                );
              }
            }

            // desert strongholds have trails.
            if (feature == "stronghold" && hex.type != "desert" ) {
              hex["trail"] = true;
            }


            if (hex.feature == "stronghold") {
              hex["residents"] = [];
              let die = roll(6);
              if (die == 1) {
                self.data[id] = Object.assign(
                  self.data[id],
                  assets.tiles["chaotic anti-cleric temple"]
                );
                hex.residents.push([1, 8 + roll(4), "chaotic anti-cleric leader"]);

                // 50%
                if (roll(2) == 1) {
                  if (roll(2) == 1) {
                    // Extra Fighter 5-8HD
                    hex.residents.push([1, 4 + roll(4), "chaotic fighter lieutenant"]);
                  } else {
                    // Extra Assistants 3-6HD
                    for (let n = roll(6); n > 0; n--) {
                      hex.residents.push([1, 2 + roll(4), "chaotic anti-cleric"]);
                    }
                  }
                }

                let fighters = (roll(6) + roll(6) + roll(6)) * 10;
                if (roll(2) == 1) {
                  hex.residents.push([fighters, 1, "orc fighters"]);
                  hex.residents.push([fighters - roll(3)*10 , 1, "support staff"]);
                } else {
                  hex.residents.push([fighters, 1, "fighters"]);
                  hex.residents.push([fighters - roll(3)*10, 1, "support staff"]);
                }

              }
              if (die == 2) {
                self.data[id] = Object.assign(
                  self.data[id],
                  assets.tiles["chaotic magic-user tower"]
                );
                hex.residents.push([1, 8 + roll(3), "chaotic magic-user"]);
              }
              if (die == 3) {
                self.data[id] = Object.assign(
                  self.data[id],
                  assets.tiles["chaotic fighter stronghold"]
                );
                hex.residents.push([1, 8 + roll(3), "chaotic fighter"]);
              }
              if (die == 4) {
                self.data[id] = Object.assign(
                  self.data[id],
                  assets.tiles["neutral fighter stronghold"]
                );
                hex.residents.push([1, 8 + roll(3), "neutral fighter"]);
              }
              if (die == 5) {
                self.data[id] = Object.assign(
                  self.data[id],
                  assets.tiles["neutral magic-user tower"]
                );
                hex.residents.push([1, 8 + roll(3), "neutral magic-user"]);
              }
              if (die == 6) {
                self.data[id] = Object.assign(
                  self.data[id],
                  assets.tiles["lawful cleric temple"]
                );
                hex.residents.push([1, 8 + roll(3), "lawful cleric"]);
              }

              let chosen = false;
              let encounter = '';
              let monster = {};

              while (!chosen) {
                encounter = hex.random_encounter[
                  roll(hex.random_encounter.length) - 1
                ];

                if (Array.isArray(encounter)) {
                    encounter = encounter[
                      roll(encounter.length) - 1
                    ];
                }

                monster = assets.monsters[encounter];
                if (monster == undefined) {
                  throw(encounter + " not found in monster.json!");
                }

                if (roll(100) <= monster.lair_nearby) {
                  chosen = true;
                }

              }
              hex.residents.push([
                Dice.roll(monster.number_in_lair),
                monster.hd,
                encounter
              ]);

            }

            if (hex.feature == "lair") {
              hex["residents"] = [];
              let chosen = false;
              let encounter = '';
              let monster = {};

              while (!chosen) {
                encounter = hex.random_encounter[
                  roll(hex.random_encounter.length) - 1
                ];

                if (Array.isArray(encounter)) {
                    encounter = encounter[
                      roll(encounter.length) - 1
                    ];
                }

                monster = assets.monsters[encounter];
                if (monster == undefined) {
                  throw(encounter + " not found in monster.json!");
                }

                if (roll(100) <= monster.lair_nearby) {
                  chosen = true;
                }

              }
              hex.residents.push([
                Dice.roll(monster.number_in_lair),
                monster.hd,
                encounter
              ]);
            }

            // Output details about featured hexes.
            if (hex.feature) {
              let container = document.createElement('p');
              let description = document.createElement('div');
              description.innerText = "#" + id + ": " + hex.feature + "\n";
              container.appendChild(description);
              if (hex.residents) {
                hex.residents.forEach((block) => {
                  let resident = document.createElement('div');
                  resident.innerText = block[0] + "x " + block[1] +"HD " + block[2];
                  container.appendChild(resident);
                });
              }
              document.querySelector("#key").appendChild(container);
            }
        }
      }
    }
  }

  // turn an x and y coord into a 4 digit string "xxyy";
  static getId(x, y) {
    let id = ''
    if (x < 10) {
      id += '0' + x;
    } else {
      id += x;
    }
    if (y < 10) {
      id += '0' + y;
    } else {
      id += y;
    }
    return id;
  }

}
