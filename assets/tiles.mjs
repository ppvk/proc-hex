export default {
  "random": {
    "random_terrain": [
      "desert",
      "desert",
      "open",
      "open",
      "wood",
      "mountain",
      "wood",
      "open",
      "open",
      "open",
      "swamp"
    ]
  },

  "open": {
    "type": "open",
    "glyph": "",
    "stroke": "#000",
    "fill": "#90be6d",
    "elevation": 1,
    "random_terrain": [
      "desert",
      "open",
      "open",
      "mountain",
      "open",
      "open",
      "open",
      "wood",
      "open",
      "open",
      "swamp"
    ],
    "random_feature": [
      "lair",
      null, // ford
      null,
      null, // river
      "village",
      "village",
      null,
      null,
      null,
      null,
      "town"
    ],
    "random_encounter": [
      [
        "dinosaurs, brontosaurs",
        "dinosaurs, mosasaur",
        "dinosaurs, pterodactyls",
        "dinosaurs, stegosaurs",
        "dinosaurs, triceratops",
        "dinosaurs, tyrannosaurus rexes",
        "dinosaurs, deinonychus"
      ],
      "dogs",
      [
        "dragons, black, hatchling",
        "dragons, black, young",
        "dragons, black, adult",
        "dragons, black, mature",
        "dragons, black, old",
        "dragons, black, ancient",

        "dragons, blue, hatchling",
        "dragons, blue, young",
        "dragons, blue, adult",
        "dragons, blue, mature",
        "dragons, blue, old",
        "dragons, blue, ancient",

        "dragons, golden, hatchling",
        "dragons, golden, young",
        "dragons, golden, adult",
        "dragons, golden, mature",
        "dragons, golden, old",
        "dragons, golden, ancient",

        "dragons, green, hatchling",
        "dragons, green, young",
        "dragons, green, adult",
        "dragons, green, mature",
        "dragons, green, old",
        "dragons, green, ancient",

        "dragons, red, hatchling",
        "dragons, red, young",
        "dragons, red, adult",
        "dragons, red, mature",
        "dragons, red, old",
        "dragons, red, ancient",

        "dragons, white, hatchling",
        "dragons, white, young",
        "dragons, white, adult",
        "dragons, white, mature",
        "dragons, white, old",
        "dragons, white, ancient"
      ],
      "dwarfs",
      "elves",
      "giants, hill",
      "gnolls",
      "goblins",
      "gorgons",
      "hobgoblins",
      [
        "horses, destrier",
        "horses, draft horse",
        "horses, mule",
        "horses, riding horse",
        "horses, war horse"
      ],
      "lions",
      [
        "lycanthropes, werebears",
        "lycanthropes, wereboars",
        "lycanthropes, weretigers",
        "lycanthropes, werewolves"
      ],
      "mastadons",
      ["men, bandits"],
      ["men, bandits"],
      "ogres",
      "orcs",
      "purple worms",
      "titanotheres"
    ]
  },
  "wood": {
    "type": "wood",
    "glyph": "\u{1F332}\u{1F332}",
    "stroke": "#000",
    "fill": "#2d6a4f",
    "elevation": 2,
    "random_terrain": [
      "open",
      "mountain",
      "wood",
      "wood",
      "wood",
      "open",
      "wood",
      "wood",
      "wood",
      "wood",
      "swamp"
    ],
    "random_feature": [
      null, // river
      null, // river
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      "trail",
      "stronghold"
    ],
    "random_encounter": [
      "bears",
      [
        "boars",
        "boars, giant"
      ],
      "centaurs",
      [
        "centipedes, large",
        "centipedes, giant"
      ],
      "cockatrices",
      [
        "dragons, green, hatchling",
        "dragons, green, young",
        "dragons, green, adult",
        "dragons, green, mature",
        "dragons, green, old",
        "dragons, green, ancient"
      ],
      "dryads",
      "elves",
      [
        "lycanthropes, werebears",
        "lycanthropes, wereboars",
        "lycanthropes, weretigers",
        "lycanthropes, werewolves"
      ],
      "medusae",
      ["men, bandits"],
      ["men, bandits"],
      "ogres",
      "pixies",
      "purple worms",
      [
        "snakes, large",
        "snakes, giant"
      ],
      [
        "spiders, large",
        "spiders, giant"
      ],
      "treants",
      "unicorns",
      "weasels, giant"
    ]
  },
  "mountain": {
    "type": "mountain",
    "glyph": "\u{1F3D4}",
    "stroke": "#000",
    "fill": "#ddd",
    "elevation": 8,
    "random_terrain": [
      "open",
      "open",
      "desert",
      "mountain",
      "mountain",
      "open",
      "mountain",
      "mountain",
      "wood",
      "mountain",
      "mountain"
    ],
    "random_feature": [
      null,
      "lair",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      "trail",
      "stronghold"
    ],
    "random_encounter": [
      "cave bears",
      "cavemen",
      "chimeras",
      [
        "dragons, red, hatchling",
        "dragons, red, young",
        "dragons, red, adult",
        "dragons, red, mature",
        "dragons, red, old",
        "dragons, red, ancient"
      ],
      "dwarfs",
      [
        "elemental, earth, small",
        "elemental, earth, medium",
        "elemental, earth, large"
      ],
      "gargoyles",
      "giants, stone",
      "goblins",
      "griffons",
      "hippogriffs",
      "hobgoblins",
      "lions, spotted",
      ["men, bandits"],
      "minotaurs",
      ["men, bandits"],
      [
        "rocs, young",
        "rocs, adult",
        "rocs, ancient"
      ],
      "sabre toothed tigers",
      "trolls",
      "wyverns"
    ]
  },
  "desert": {
    "type": "desert",
    "glyph": "\u{1F3DC}",
    "stroke": "#000",
    "fill": "#EE9B00",
    "elevation": 11,
    "random_terrain": [
      "open",
      "mountain",
      "mountain",
      "desert",
      "desert",
      "desert",
      "desert",
      "desert",
      "desert",
      "desert",
      "open"
    ],
    "random_feature": [
      "lair",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      "stronghold"
    ],
    "random_encounter": [
      "ants, giant",
      "cavemen",
      [
        "centipedes, large",
        "centipedes, giant"
      ],
      "chimeras",
      "cyclopes",
      "djinni",
      [
        "dragons, blue, hatchling",
        "dragons, blue, young",
        "dragons, blue, adult",
        "dragons, blue, mature",
        "dragons, blue, old",
        "dragons, blue, ancient"
      ],
      "efreeti",
      [
        "elemental, fire, small",
        "elemental, fire, medium",
        "elemental, fire, large"
      ],
      "giants, fire",
      "gnolls",
      [
        "living statue, iron",
        "living statue, stone"
      ],
      "manticoras",
      ["men, bandits"],
      "mummies",
      ["men, bandits"],
      "purple worms",
      "salamanders",
      "scorpions, giant",
      "snakes, giant"
    ]
  },
  "swamp": {
    "type": "swamp",
    "glyph": "\u26B6\u26B6",
    "stroke": "#000",
    "fill": "#43aa8b",
    "elevation": 0,
    "random_terrain": [
      "mountain",
      "swamp",
      "swamp",
      "swamp",
      "swamp",
      "wood",
      "swamp",
      "swamp",
      "swamp",
      "open",
      "open"
    ],
    "random_feature": [
      null,
      "lair",
      null, // river
      null, // river
      "trail",
      null,
      null,
      null,
      null,
      null,
      "stronghold"
    ],
    "random_encounter": [
      "basilisks",
      "crocodiles",
      "crocodiles, giant",
      [
        "dinosaurs, brontosaurs",
        "dinosaurs, mosasaur",
        "dinosaurs, pterodactyls",
        "dinosaurs, stegosaurs",
        "dinosaurs, triceratops",
        "dinosaurs, tyrannosaurus rexes",
        "dinosaurs, deinonychus"
      ],
      "dragon turtles",
      [
        "dragons, black, hatchling",
        "dragons, black, young",
        "dragons, black, adult",
        "dragons, black, mature",
        "dragons, black, old",
        "dragons, black, ancient"
      ],
      "giants, hill",
      "hydras",
      "kobolds",
      "leeches, giant",
      "lizardmen",
      [
        "lizards, large",
        "lizards, giant"
      ],
      "medusae",
      ["men, bandits"],
      ["men, bandits"],
      [
        "black pudding",
        "gray ooze",
        "green slime",
        "ochre jelly"
      ],
      "purple worms",
      [
        "snakes, large",
        "snakes, giant"
      ],
      "toads, giant",
      "trolls"
    ]
  },

  "lair": {
    "glyph": "\u{1F15B}",
    "stroke": "darkred",
    "feature": "lair"
  },
  "ford": {
    "glyph": "\u{1F3D6}",
    "river": true,
    "feature": "ford"
  },
  "river": {
    "river": true
  },

  "village": {
    "glyph": "\u{1F165}",
    "stroke": "black",
    "feature": "village"
  },
  "town": {
    "glyph": "\u{1F163}",
    "stroke": "black",
    "feature": "town"
  },

  "stronghold": {
    "feature": "stronghold",
    "fill": "gray"
  },
  "chaotic anti-cleric temple": {
    "glyph": "\u{1F54D}",
    "stroke": "darkred",
    "feature": "chaotic anti-cleric temple",
    "random_encounter": [
      "men, bandits",
      [
        "lycanthropes, werebears",
        "lycanthropes, wereboars",
        "lycanthropes, weretigers",
        "lycanthropes, werewolves"
      ],
      "medusae",
      "mummies",
      "spectres",
      "vampires"
    ]
  },
  "chaotic magic-user tower": {
    "glyph": "\u{1F3EF}",
    "stroke": "darkred",
    "feature": "chaotic magic-user tower",
    "random_encounter": [
      "basilisks",
      "chimeras",
      [
        "dragons, black, hatchling",
        "dragons, black, young",
        "dragons, black, adult",
        "dragons, black, mature",
        "dragons, black, old",
        "dragons, black, ancient",

        "dragons, blue, hatchling",
        "dragons, blue, young",
        "dragons, blue, adult",
        "dragons, blue, mature",
        "dragons, blue, old",
        "dragons, blue, ancient",

        "dragons, golden, hatchling",
        "dragons, golden, young",
        "dragons, golden, adult",
        "dragons, golden, mature",
        "dragons, golden, old",
        "dragons, golden, ancient",

        "dragons, green, hatchling",
        "dragons, green, young",
        "dragons, green, adult",
        "dragons, green, mature",
        "dragons, green, old",
        "dragons, green, ancient",

        "dragons, red, hatchling",
        "dragons, red, young",
        "dragons, red, adult",
        "dragons, red, mature",
        "dragons, red, old",
        "dragons, red, ancient",

        "dragons, white, hatchling",
        "dragons, white, young",
        "dragons, white, adult",
        "dragons, white, mature",
        "dragons, white, old",
        "dragons, white, ancient"
      ],
      "efreeti",
      [
        "elemental, air, small",
        "elemental, air, medium",
        "elemental, air, large",

        "elemental, earth, small",
        "elemental, earth, medium",
        "elemental, earth, large",

        "elemental, fire, small",
        "elemental, fire, medium",
        "elemental, fire, large",

        "elemental, water, small",
        "elemental, water, medium",
        "elemental, water, large"
      ],
      "gargoyles"
    ]
  },
  "chaotic fighter stronghold": {
    "glyph": "\u{1F3F0}",
    "stroke": "darkred",
    "feature": "chaotic fighter stronghold",
    "random_encounter": [
      "men, bandits",
      [
        "dragons, black, hatchling",
        "dragons, black, young",
        "dragons, black, adult",
        "dragons, black, mature",
        "dragons, black, old",
        "dragons, black, ancient",

        "dragons, blue, hatchling",
        "dragons, blue, young",
        "dragons, blue, adult",
        "dragons, blue, mature",
        "dragons, blue, old",
        "dragons, blue, ancient",

        "dragons, golden, hatchling",
        "dragons, golden, young",
        "dragons, golden, adult",
        "dragons, golden, mature",
        "dragons, golden, old",
        "dragons, golden, ancient",

        "dragons, green, hatchling",
        "dragons, green, young",
        "dragons, green, adult",
        "dragons, green, mature",
        "dragons, green, old",
        "dragons, green, ancient",

        "dragons, red, hatchling",
        "dragons, red, young",
        "dragons, red, adult",
        "dragons, red, mature",
        "dragons, red, old",
        "dragons, red, ancient",

        "dragons, white, hatchling",
        "dragons, white, young",
        "dragons, white, adult",
        "dragons, white, mature",
        "dragons, white, old",
        "dragons, white, ancient"
      ],
      [
        "giants, cloud",
        "giants, fire",
        "giants, frost",
        "giants, hill",
        "giants, stone",
        "giants, storm"
      ],
      "manticoras",
      "ogres",
      "trolls"
    ]
  },
  "neutral fighter stronghold": {
    "glyph": "\u{1F3F0}",
    "stroke": "black",
    "feature": "neutral fighter stronghold",
    "random_encounter": [
      "djinni",
      [
        "giants, cloud",
        "giants, fire",
        "giants, frost",
        "giants, hill",
        "giants, stone",
        "giants, storm"
      ],
      "griffons",
      "men, bandits",
      [
        "lycanthropes, werebears",
        "lycanthropes, wereboars",
        "lycanthropes, weretigers",
        "lycanthropes, werewolves"
      ],
      "wyverns"
    ]
  },
  "neutral magic-user tower": {
    "glyph": "\u{1F3EF}",
    "stroke": "black",
    "feature": "neutral magic-user tower",
    "random_encounter": [
      "centaurs",
      "djinni",
      [
        "dragons, black, hatchling",
        "dragons, black, young",
        "dragons, black, adult",
        "dragons, black, mature",
        "dragons, black, old",
        "dragons, black, ancient",

        "dragons, blue, hatchling",
        "dragons, blue, young",
        "dragons, blue, adult",
        "dragons, blue, mature",
        "dragons, blue, old",
        "dragons, blue, ancient",

        "dragons, golden, hatchling",
        "dragons, golden, young",
        "dragons, golden, adult",
        "dragons, golden, mature",
        "dragons, golden, old",
        "dragons, golden, ancient",

        "dragons, green, hatchling",
        "dragons, green, young",
        "dragons, green, adult",
        "dragons, green, mature",
        "dragons, green, old",
        "dragons, green, ancient",

        "dragons, red, hatchling",
        "dragons, red, young",
        "dragons, red, adult",
        "dragons, red, mature",
        "dragons, red, old",
        "dragons, red, ancient",

        "dragons, white, hatchling",
        "dragons, white, young",
        "dragons, white, adult",
        "dragons, white, mature",
        "dragons, white, old",
        "dragons, white, ancient"
      ],
      [
        "elemental, air, small",
        "elemental, air, medium",
        "elemental, air, large",

        "elemental, earth, small",
        "elemental, earth, medium",
        "elemental, earth, large",

        "elemental, fire, small",
        "elemental, fire, medium",
        "elemental, fire, large",

        "elemental, water, small",
        "elemental, water, medium",
        "elemental, water, large"
      ],
      "gorgons",
      "minotaurs"
    ]
  },
  "lawful cleric temple": {
    "glyph": "\u{1F54D}",
    "stroke": "darkblue",
    "feature": "lawful cleric temple",
    "random_encounter": [
      "centaurs",
      [
        "elemental, air, small",
        "elemental, air, medium",
        "elemental, air, large",

        "elemental, earth, small",
        "elemental, earth, medium",
        "elemental, earth, large",

        "elemental, fire, small",
        "elemental, fire, medium",
        "elemental, fire, large",

        "elemental, water, small",
        "elemental, water, medium",
        "elemental, water, large"
      ],
      "men, bandits",
      "hippogriffs",
      [
        "rocs, young",
        "rocs, adult",
        "rocs, ancient"
      ],
      "treants"
    ]
  }
}
