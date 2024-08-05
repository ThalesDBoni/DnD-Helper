import { marked } from "marked";
import View from "./view.js";

const btn = document.querySelector('.button')

class RaceView extends View {
  _parentElement = document.querySelector('.sheet__race')

  _generateMarkup(data) {
    return `
      <span>${marked.parse(data.age)}</span>
      <span>${marked.parse(data.speed)}</span>
      <span>${marked.parse(data.size)}</span>
      <span>${marked.parse(data.languages)}</span>
      <span>${marked.parse(data.alignment)}</span>
      <span>${marked.parse(data.vision)}</span>
      <span>${marked.parse(data.traits)}</span>
  `
  }

  addHandlerGetCharacterInfo(handler) {
    btn.addEventListener('click', function(e) {
      e.preventDefault()
      handler()
    })
  }
}

export default new RaceView()