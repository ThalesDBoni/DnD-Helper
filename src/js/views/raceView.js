import { marked } from "marked"
import View from "./view.js"

const btn = document.querySelector(".button")
const sheetInfos = document.querySelector(".sheet__data")

class RaceView extends View {
  _parentElement = document.querySelector(".sheet__race")

  _generateMarkup(data) {
    sheetInfos.classList.remove("opacity-0")

    return `
      <h2 class="text-2xl font-bold text-amber-400 font-[Cinzel]">Race</h2>
      <span>${marked.parse(data.age)}</span>
      <span>${marked.parse(data.speed)}</span>
      <span>${marked.parse(data.size)}</span>
      <span>${marked.parse(data.languages)}</span>
      <span>${marked.parse(data.alignment)}</span>
      <span>${marked.parse(data.vision)}</span>
      <span class="prose-p:mb-2">${marked.parse(data.traits)}</span>
  `
  }

  addHandlerGetCharacterInfo(handler) {
    btn.addEventListener("click", function (e) {
      e.preventDefault()
      handler()
    })
  }
}

export default new RaceView()
