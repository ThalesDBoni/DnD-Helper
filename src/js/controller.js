import * as model from './model.js'
import 'regenerator-runtime/runtime'
import raceView from './views/raceView.js'
import classView from './views/classView.js'
import subraceView from './views/subraceView.js'
import pathsView from './views/pathsView.js'
import archetypeFormView from './views/archetypeFormView.js'
import subraceFormView from './views/subraceFormView.js'
import sheetAttributesView from './views/sheetAttributesView.js'
import sheetAttributesModView from './views/sheetAttributesModView.js'

async function controlGenerator() {
  // Getting Data
  model.getCharacterInfo()
  await model.getDataCharactersInfo()

  // Rolling Dices and Setting Attributes
  model.getAttributesNumber()
  model.updateASIAttributesRace()
  model.updateASIAttributesSubrace()
  model.updateStateModifiers()
  model.updateSheetInfo()
  console.log(model.state)
  // Render
  sheetAttributesView.displayAttributes(model.state.characterInfos.attributes)
  sheetAttributesModView.displayAttributes(model.state.characterInfos.modifiers)
  raceView.render(model.state.race)  
  classView.render(model.state.class)

  subraceView._clear()
  if (model.state.characterInfos.characterSubrace != 'No Options') subraceView.render(model.state.subrace)

  pathsView._clear()
  pathsView.render(model.state.archetype)
}

async function controlArchetypeForm() {
  // Gettind Data
  model.getClassInfo()
  await model.getDataClass()

  // Render
  archetypeFormView.renderForm(model.state.paths)

  // Updating State Archetype Value
  model.getArchetypeInfo()
}

async function controlSubraceForm() {
  model.getAttributesNumber()
  
  // Gettind Data
  model.getRaceInfo()
  await model.getDataRace()
 
  // Render
  subraceFormView.renderForm(model.state.subraces)
 
  // Updating State Subrace Value
  model.getSubraceInfo()
}

function init() {
  raceView.addHandlerGetCharacterInfo(controlGenerator)
  archetypeFormView.handlerArchetypeDisplay(controlArchetypeForm)
  subraceFormView.handlerSubraceDisplay(controlSubraceForm)
}
init()