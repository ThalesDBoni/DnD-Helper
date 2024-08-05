export const state = {
  characterInfos: {
    characterClass: '',
    characterRace: '',
    characterLevel: 1,
    characterArchetype: {},
    characterSubrace: {},
    attributes: {
      strength: 1,
      dexterity: 1,
      constitution: 1,
      intelligence: 1,
      wisdom: 1,
      charisma: 1,
      ca: 1,
      life: 1,
      initiative: 1,
      profBonus: 1,
    },
    modifiers: {
      strength: 1,
      dexterity: 1,
      constitution: 1,
      intelligence: 1,
      wisdom: 1,
      charisma: 1,
    },
  },
  race: {
    age: '',
    speed: '',
    languages: '',
    alignment: '',
    size: '',
    vision: '',
    traits: '',
    asi: '',
  },
  class: {
    hit_dice: '<b>Hit Dice.</b> ',
    hp_at_higher_levels: '<b>HP at Higher Levels.</b> ',
    prof_armor: '<b>Armor Proficiency.</b> ',
    prof_saving_throws: '<b>Saving Throws Proficiency.</b> ',
    prof_skills: '<b>Skills Proficiency.</b> ',
    prof_weapons: '<b>Weapons Proficiency.</b> ',
    equipment: '<b>Start Equipment.</b> ',
    table: '',
    desc: '',
  },
  subrace: {
    name: '',
    desc: '',
    asi: '',
    traits: '',
  },
  archetype: {
    name: '',
    desc: '',
  },
  paths: [],
  subraces: [],
}

async function getData(dataLink) {
  const response = await fetch(`https://api.open5e.com/${dataLink}`)
  const data = await response.json()

  return data
}

export async function getDataCharactersInfo() {
  await getDataClass()
  await getDataRace()
  updateStateSubrace(state.subraces)
  updateStateArchetype(state.paths)
}

export async function getDataClass() {
  try {
    if (state.characterInfos.characterClass === 'Choose here') {
      throw new Error('You should select a class! 👍')
    }

    const dataClasses = await getData(
      `classes/${state.characterInfos.characterClass}/`
    )

    updateStateClass(dataClasses)
  } catch (err) {
    alert(err.message)
  }
}

export async function getDataRace() {
  try {
    if (state.characterInfos.characterRace === 'Choose here') {
      throw new Error('You should select a race! 👍')
    }

    const dataRaces = await getData(
      `races/${state.characterInfos.characterRace}/`
    )

    updateStateRace(dataRaces)
  } catch (err) {
    alert(err.message)
  }
  
}

export function getCharacterInfo() {
  getClassInfo()
  getRaceInfo()
  getSubraceInfo()
  getArchetypeInfo()
  state.characterInfos.characterLevel =
    document.querySelector('.level_selected').value
}

export function getClassInfo() {
  state.characterInfos.characterClass =
    document.querySelector('.class_selected').value
}

export function getRaceInfo() {
  state.characterInfos.characterRace =
    document.querySelector('.race_selected').value
}

export function getArchetypeInfo() {
  state.characterInfos.characterArchetype = document.querySelector(
    '.archetype_selected'
  ).value
}

export function getSubraceInfo() {
  state.characterInfos.characterSubrace =
    document.querySelector('.subrace_selected').value
}

export function getAttributesNumber() {
  const rolls = [
    rollAnAttribute(),
    rollAnAttribute(),
    rollAnAttribute(),
    rollAnAttribute(),
    rollAnAttribute(),
    rollAnAttribute(),
  ]

  rolls.sort(function (a, b) {
    return a - b
  })

  if (state.characterInfos.characterClass === 'barbarian') {
    state.characterInfos.attributes.strength = rolls[5]
    state.characterInfos.attributes.constitution = rolls[4]
    state.characterInfos.attributes.dexterity = rolls[3]
    state.characterInfos.attributes.wisdom = rolls[2]
    state.characterInfos.attributes.charisma = rolls[1]
    state.characterInfos.attributes.intelligence = rolls[0]
  }

  if (state.characterInfos.characterClass === 'sorcerer') {
    state.characterInfos.attributes.strength = rolls[0]
    state.characterInfos.attributes.dexterity = rolls[1]
    state.characterInfos.attributes.constitution = rolls[3]
    state.characterInfos.attributes.intelligence = rolls[5]
    state.characterInfos.attributes.wisdom = rolls[4]
    state.characterInfos.attributes.charisma = rolls[2]
  }

  if (state.characterInfos.characterClass === 'rogue') {
    state.characterInfos.attributes.strength = rolls[2]
    state.characterInfos.attributes.dexterity = rolls[5]
    state.characterInfos.attributes.constitution = rolls[1]
    state.characterInfos.attributes.intelligence = rolls[0]
    state.characterInfos.attributes.wisdom = rolls[3]
    state.characterInfos.attributes.charisma = rolls[4]
  }

  if (state.characterInfos.characterClass === 'paladin') {
    state.characterInfos.attributes.strength = rolls[4]
    state.characterInfos.attributes.dexterity = rolls[0]
    state.characterInfos.attributes.constitution = rolls[5]
    state.characterInfos.attributes.intelligence = rolls[3]
    state.characterInfos.attributes.wisdom = rolls[2]
    state.characterInfos.attributes.charisma = rolls[1]
  }

  if (state.characterInfos.characterClass === 'bard') {
    state.characterInfos.attributes.strength = rolls[0]
    state.characterInfos.attributes.dexterity = rolls[2]
    state.characterInfos.attributes.constitution = rolls[1]
    state.characterInfos.attributes.intelligence = rolls[3]
    state.characterInfos.attributes.wisdom = rolls[5]
    state.characterInfos.attributes.charisma = rolls[4]
  }

  if (state.characterInfos.characterClass === 'cleric') {
    state.characterInfos.attributes.strength = rolls[0]
    state.characterInfos.attributes.dexterity = rolls[2]
    state.characterInfos.attributes.constitution = rolls[1]
    state.characterInfos.attributes.intelligence = rolls[3]
    state.characterInfos.attributes.wisdom = rolls[5]
    state.characterInfos.attributes.charisma = rolls[4]
  }

  if (state.characterInfos.characterClass === 'druid') {
    state.characterInfos.attributes.strength = rolls[0]
    state.characterInfos.attributes.dexterity = rolls[1]
    state.characterInfos.attributes.constitution = rolls[4]
    state.characterInfos.attributes.intelligence = rolls[3]
    state.characterInfos.attributes.wisdom = rolls[5]
    state.characterInfos.attributes.charisma = rolls[2]
  }

  if (state.characterInfos.characterClass === 'fighter') {
    state.characterInfos.attributes.strength = rolls[5]
    state.characterInfos.attributes.dexterity = rolls[3]
    state.characterInfos.attributes.constitution = rolls[4]
    state.characterInfos.attributes.intelligence = rolls[1]
    state.characterInfos.attributes.wisdom = rolls[0]
    state.characterInfos.attributes.charisma = rolls[2]
  }

  if (state.characterInfos.characterClass === 'monk') {
    state.characterInfos.attributes.strength = rolls[0]
    state.characterInfos.attributes.dexterity = rolls[5]
    state.characterInfos.attributes.constitution = rolls[3]
    state.characterInfos.attributes.intelligence = rolls[1]
    state.characterInfos.attributes.wisdom = rolls[4]
    state.characterInfos.attributes.charisma = rolls[2]
  }

  if (state.characterInfos.characterClass === 'ranger') {
    state.characterInfos.attributes.strength = rolls[0]
    state.characterInfos.attributes.dexterity = rolls[5]
    state.characterInfos.attributes.constitution = rolls[3]
    state.characterInfos.attributes.intelligence = rolls[1]
    state.characterInfos.attributes.wisdom = rolls[4]
    state.characterInfos.attributes.charisma = rolls[2]
  }

  if (state.characterInfos.characterClass === 'warlock') {
    state.characterInfos.attributes.strength = rolls[0]
    state.characterInfos.attributes.dexterity = rolls[1]
    state.characterInfos.attributes.constitution = rolls[4]
    state.characterInfos.attributes.intelligence = rolls[3]
    state.characterInfos.attributes.wisdom = rolls[2]
    state.characterInfos.attributes.charisma = rolls[5]
  }

  if (state.characterInfos.characterClass === 'wizard') {
    state.characterInfos.attributes.strength = rolls[0]
    state.characterInfos.attributes.dexterity = rolls[1]
    state.characterInfos.attributes.constitution = rolls[4]
    state.characterInfos.attributes.intelligence = rolls[3]
    state.characterInfos.attributes.wisdom = rolls[2]
    state.characterInfos.attributes.charisma = rolls[5]
  }
}

export function updateASIAttributesRace() {
  state.race.asi.forEach(att => {
    if (att.attributes[0] === 'Strength') {
      state.characterInfos.attributes.strength += att.value
    }

    if (att.attributes[0] === 'Dexterity') {
      state.characterInfos.attributes.dexterity += att.value
    }

    if (att.attributes[0] === 'Constitution') {
      state.characterInfos.attributes.constitution += att.value
    }

    if (att.attributes[0] === 'Intelligence') {
      state.characterInfos.attributes.intelligence += att.value
    }

    if (att.attributes[0] === 'Wisdom') {
      state.characterInfos.attributes.wisdom += att.value
    }

    if (att.attributes[0] === 'Charisma') {
      state.characterInfos.attributes.charisma += att.value
    }
  })
}

export function updateASIAttributesSubrace() {
  if (state.characterInfos.characterSubrace === 'No Options') return

  state.subrace.asi.forEach(att => {
    if (att.attributes[0] === 'Strength') {
      state.characterInfos.attributes.strength += att.value
    }

    if (att.attributes[0] === 'Dexterity') {
      state.characterInfos.attributes.dexterity += att.value
    }

    if (att.attributes[0] === 'Constitution') {
      state.characterInfos.attributes.constitution += att.value
    }

    if (att.attributes[0] === 'Intelligence') {
      state.characterInfos.attributes.intelligence += att.value
    }

    if (att.attributes[0] === 'Wisdom') {
      state.characterInfos.attributes.wisdom += att.value
    }

    if (att.attributes[0] === 'Charisma') {
      state.characterInfos.attributes.charisma += att.value
    }
  })
}

export function updateStateModifiers() {
  state.characterInfos.modifiers.strength = Math.floor(
    (state.characterInfos.attributes.strength - 10) / 2
  )
  state.characterInfos.modifiers.dexterity = Math.floor(
    (state.characterInfos.attributes.dexterity - 10) / 2
  )
  state.characterInfos.modifiers.constitution = Math.floor(
    (state.characterInfos.attributes.constitution - 10) / 2
  )
  state.characterInfos.modifiers.intelligence = Math.floor(
    (state.characterInfos.attributes.intelligence - 10) / 2
  )
  state.characterInfos.modifiers.wisdom = Math.floor(
    (state.characterInfos.attributes.wisdom - 10) / 2
  )
  state.characterInfos.modifiers.charisma = Math.floor(
    (state.characterInfos.attributes.charisma - 10) / 2
  )
}

export function updateSheetInfo() {
  state.characterInfos.attributes.ca =
    10 + state.characterInfos.modifiers.dexterity
  state.characterInfos.attributes.initiative =
    state.characterInfos.modifiers.dexterity
  lifeAndPBCalculator(state.class.hit_dice)
}

function lifeAndPBCalculator(data) {
  const level = document.querySelector('.level_selected').value

  // Prof Bonus
  state.characterInfos.attributes.profBonus = Math.floor(2 + (level - 1) / 4)

  // Life
  if (data === '<b>Hit Dice.</b> 1d12') {
    state.characterInfos.attributes.life =
      12 + state.characterInfos.modifiers.constitution

    if (level > 1) {
      for (let i = 2; i <= level; i++) {
        state.characterInfos.attributes.life +=
          getRandomNumber(1, 12) + state.characterInfos.modifiers.constitution
      }
    }
  }

  if (data === '<b>Hit Dice.</b> 1d10') {
    state.characterInfos.attributes.life =
      10 + state.characterInfos.modifiers.constitution

    if (level > 1) {
      for (let i = 2; i <= level; i++) {
        state.characterInfos.attributes.life +=
          getRandomNumber(1, 10) + state.characterInfos.modifiers.constitution
      }
    }
  }

  if (data === '<b>Hit Dice.</b> 1d8') {
    state.characterInfos.attributes.life =
      8 + state.characterInfos.modifiers.constitution

    if (level > 1) {
      for (let i = 2; i <= level; i++) {
        state.characterInfos.attributes.life +=
          getRandomNumber(1, 8) + state.characterInfos.modifiers.constitution
      }
    }
  }

  if (data === '<b>Hit Dice.</b> 1d6') {
    state.characterInfos.attributes.life =
      6 + state.characterInfos.modifiers.constitution

    if (level > 1) {
      for (let i = 2; i <= level; i++) {
        state.characterInfos.attributes.life +=
          getRandomNumber(1, 6) + state.characterInfos.modifiers.constitution
      }
    }
  }
}

function updateStateRace(data) {
  const raceData = data

  state.race.age = data.age
  state.race.speed = data.speed_desc
  state.race.languages = data.languages
  state.race.alignment = data.alignment
  state.race.size = data.size
  state.race.vision = data.vision
  state.race.traits = data.traits
  state.race.asi = data.asi
  state.subraces = data.subraces
}

function updateStateSubrace(data) {
  if (state.characterInfos.characterSubrace === 'No Options') {
    state.subrace.name = ''
    state.subrace.desc = ''
    state.subrace.asi_desc = ''
    state.subrace.traits = ''
  }

  data.forEach(sub => {
    if (sub.name === state.characterInfos.characterSubrace) {
      state.subrace.name = sub.name
      state.subrace.desc = sub.desc
      state.subrace.asi = sub.asi
      state.subrace.traits = sub.traits
    }
  })
}

function updateStateArchetype(data) {
  data.forEach(arch => {
    if (arch.name === state.characterInfos.characterArchetype) {
      state.archetype.name = arch.name
      state.archetype.desc = arch.desc
    }
  })
}

function updateStateClass(data) {
  const classData = data

  clearStateClass()

  state.class.hit_dice += data.hit_dice
  state.class.hp_at_higher_levels += data.hp_at_higher_levels
  state.class.prof_armor += data.prof_armor
  state.class.prof_saving_throws += data.prof_saving_throws
  state.class.prof_skills += data.prof_skills
  state.class.prof_weapons += data.prof_weapons
  state.class.equipment += data.equipment
  state.class.table += data.table
  state.class.desc += data.desc
  state.paths = data.archetypes
}

function clearStateClass() {
  state.class = {
    hit_dice: '<b>Hit Dice.</b> ',
    hp_at_higher_levels: '<b>HP at Higher Levels.</b> ',
    prof_armor: '<b>Armor Proficiency.</b> ',
    prof_saving_throws: '<b>Saving Throws Proficiency.</b> ',
    prof_skills: '<b>Skills Proficiency.</b> ',
    prof_weapons: '<b>Weapons Proficiency.</b> ',
    equipment: '<b>Start Equipment.</b> ',
    table: '',
    desc: '',
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function rollAnAttribute() {
  return getRandomNumber(1, 6) + getRandomNumber(1, 6) + 6
}
