// 18,2277,2370967343 207,99,83143234 17,99,200000000 127,99,105842325 30,99,188568800 76,99,103590596 3,99,200000000 69,99,78986392 91,99,200000000 565,99,38783055 14,99,200000000 922,99,25565693 399,99,42841671 31,99,200000000 436,99,21564332 273,99,23878580 29,99,144746066 285,99,23487483 773,99,29621054 47,99,71686910 50,99,141509520 416,99,21170249 771,99,25981383 3,99,200000000 767,500 2769,400 395,1758 130311,2 136980,4 7573,300 3501,513 212,200 12,358

const template = {
  gameMode: 0,
  deIroned: false,
  dead: false,
  stats: [
  {
    skills: {
      total: {lvl: 0, xp: 0, rank: 0},
      attack: {lvl: 0, xp: 0, rank: 0},
      hitpoints: {lvl: 0, xp: 0, rank: 0},
      mining: {lvl: 0, xp: 0, rank: 0},
      strength: {lvl: 0, xp: 0, rank: 0},
      agility: {lvl: 0, xp: 0, rank: 0},
      smithing: {lvl: 0, xp: 0, rank: 0},
      defence: {lvl: 0, xp: 0, rank: 0},
      herblore: {lvl: 0, xp: 0, rank: 0},
      fishing: {lvl: 0, xp: 0, rank: 0},
      ranging: {lvl: 0, xp: 0, rank: 0},
      thieving: {lvl: 0, xp: 0, rank: 0},
      cooking: {lvl: 0, xp: 0, rank: 0},
      prayer: {lvl: 0, xp: 0, rank: 0},
      crafting: {lvl: 0, xp: 0, rank: 0},
      firemaking: {lvl: 0, xp: 0, rank: 0},
      magic: {lvl: 0, xp: 0, rank: 0},
      fletching: {lvl: 0, xp: 0, rank: 0},
      woodcutting: {lvl: 0, xp: 0, rank: 0},
      runecraft: {lvl: 0, xp: 0, rank: 0},
      slayer: {lvl: 0, xp: 0, rank: 0},
      farming: {lvl: 0, xp: 0, rank: 0},
      construction: {lvl: 0, xp: 0, rank: 0},
      hunter: {lvl: 0, xp: 0, rank: 0}
    },
    clues: {
      all: {score: 0, rank: 0},
      easy: {score: 0, rank: 0},
      medium: {score: 0, rank: 0},
      hard: {score: 0, rank: 0},
      elite: {score: 0, rank: 0},
      master: {score: 0, rank: 0}
    },
    bh: {
      rogue: {score: 0, rank: 0},
      hunter: {score: 0, rank: 0}
    },
    lms: {score: 0, rank: 0}
  },
  {
    skills: {
      total: {lvl: 0, xp: 0, rank: 0},
      attack: {lvl: 0, xp: 0, rank: 0},
      hitpoints: {lvl: 0, xp: 0, rank: 0},
      mining: {lvl: 0, xp: 0, rank: 0},
      strength: {lvl: 0, xp: 0, rank: 0},
      agility: {lvl: 0, xp: 0, rank: 0},
      smithing: {lvl: 0, xp: 0, rank: 0},
      defence: {lvl: 0, xp: 0, rank: 0},
      herblore: {lvl: 0, xp: 0, rank: 0},
      fishing: {lvl: 0, xp: 0, rank: 0},
      ranging: {lvl: 0, xp: 0, rank: 0},
      thieving: {lvl: 0, xp: 0, rank: 0},
      cooking: {lvl: 0, xp: 0, rank: 0},
      prayer: {lvl: 0, xp: 0, rank: 0},
      crafting: {lvl: 0, xp: 0, rank: 0},
      firemaking: {lvl: 0, xp: 0, rank: 0},
      magic: {lvl: 0, xp: 0, rank: 0},
      fletching: {lvl: 0, xp: 0, rank: 0},
      woodcutting: {lvl: 0, xp: 0, rank: 0},
      runecraft: {lvl: 0, xp: 0, rank: 0},
      slayer: {lvl: 0, xp: 0, rank: 0},
      farming: {lvl: 0, xp: 0, rank: 0},
      construction: {lvl: 0, xp: 0, rank: 0},
      hunter: {lvl: 0, xp: 0, rank: 0}
    },
    clues: {
      all: {score: 0, rank: 0},
      easy: {score: 0, rank: 0},
      medium: {score: 0, rank: 0},
      hard: {score: 0, rank: 0},
      elite: {score: 0, rank: 0},
      master: {score: 0, rank: 0}
    },
    bh: {
      rogue: {score: 0, rank: 0},
      hunter: {score: 0, rank: 0}
    },
    lms: {score: 0, rank: 0}
  },
  {
    skills: {
      total: {lvl: 0, xp: 0, rank: 0},
      attack: {lvl: 0, xp: 0, rank: 0},
      hitpoints: {lvl: 0, xp: 0, rank: 0},
      mining: {lvl: 0, xp: 0, rank: 0},
      strength: {lvl: 0, xp: 0, rank: 0},
      agility: {lvl: 0, xp: 0, rank: 0},
      smithing: {lvl: 0, xp: 0, rank: 0},
      defence: {lvl: 0, xp: 0, rank: 0},
      herblore: {lvl: 0, xp: 0, rank: 0},
      fishing: {lvl: 0, xp: 0, rank: 0},
      ranging: {lvl: 0, xp: 0, rank: 0},
      thieving: {lvl: 0, xp: 0, rank: 0},
      cooking: {lvl: 0, xp: 0, rank: 0},
      prayer: {lvl: 0, xp: 0, rank: 0},
      crafting: {lvl: 0, xp: 0, rank: 0},
      firemaking: {lvl: 0, xp: 0, rank: 0},
      magic: {lvl: 0, xp: 0, rank: 0},
      fletching: {lvl: 0, xp: 0, rank: 0},
      woodcutting: {lvl: 0, xp: 0, rank: 0},
      runecraft: {lvl: 0, xp: 0, rank: 0},
      slayer: {lvl: 0, xp: 0, rank: 0},
      farming: {lvl: 0, xp: 0, rank: 0},
      construction: {lvl: 0, xp: 0, rank: 0},
      hunter: {lvl: 0, xp: 0, rank: 0}
    },
    clues: {
      all: {score: 0, rank: 0},
      easy: {score: 0, rank: 0},
      medium: {score: 0, rank: 0},
      hard: {score: 0, rank: 0},
      elite: {score: 0, rank: 0},
      master: {score: 0, rank: 0}
    },
    bh: {
      rogue: {score: 0, rank: 0},
      hunter: {score: 0, rank: 0}
    },
    lms: {score: 0, rank: 0}
  },
  {
    skills: {
      total: {lvl: 0, xp: 0, rank: 0},
      attack: {lvl: 0, xp: 0, rank: 0},
      hitpoints: {lvl: 0, xp: 0, rank: 0},
      mining: {lvl: 0, xp: 0, rank: 0},
      strength: {lvl: 0, xp: 0, rank: 0},
      agility: {lvl: 0, xp: 0, rank: 0},
      smithing: {lvl: 0, xp: 0, rank: 0},
      defence: {lvl: 0, xp: 0, rank: 0},
      herblore: {lvl: 0, xp: 0, rank: 0},
      fishing: {lvl: 0, xp: 0, rank: 0},
      ranging: {lvl: 0, xp: 0, rank: 0},
      thieving: {lvl: 0, xp: 0, rank: 0},
      cooking: {lvl: 0, xp: 0, rank: 0},
      prayer: {lvl: 0, xp: 0, rank: 0},
      crafting: {lvl: 0, xp: 0, rank: 0},
      firemaking: {lvl: 0, xp: 0, rank: 0},
      magic: {lvl: 0, xp: 0, rank: 0},
      fletching: {lvl: 0, xp: 0, rank: 0},
      woodcutting: {lvl: 0, xp: 0, rank: 0},
      runecraft: {lvl: 0, xp: 0, rank: 0},
      slayer: {lvl: 0, xp: 0, rank: 0},
      farming: {lvl: 0, xp: 0, rank: 0},
      construction: {lvl: 0, xp: 0, rank: 0},
      hunter: {lvl: 0, xp: 0, rank: 0}
    },
    clues: {
      all: {score: 0, rank: 0},
      easy: {score: 0, rank: 0},
      medium: {score: 0, rank: 0},
      hard: {score: 0, rank: 0},
      elite: {score: 0, rank: 0},
      master: {score: 0, rank: 0}
    },
    bh: {
      rogue: {score: 0, rank: 0},
      hunter: {score: 0, rank: 0}
    },
    lms: {score: 0, rank: 0}
  }
]
}
const skillName = Object.keys(template.stats[0].skills)

const rsparse = (gameMode, rawStats) => {
    let result = Object.assign({}, template.stats[gameMode].skills)
    var stats = rawStats.split("\n")
    for(let i = 0; i < 24; i++) {
      let stat = stats[i].split(",")
      result[skillName[i]].rank = Number(stat[0])
      result[skillName[i]].lvl = Number(stat[1])
      result[skillName[i]].xp = Number(stat[2])
    }
    console.log(result)
    stats.forEach((stat) => {

    })
}

export default rsparse