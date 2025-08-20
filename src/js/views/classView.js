import { marked } from "marked"
import View from "./view.js"

const classAndRace = document.querySelector(".infos")

class ClassView extends View {
  _parentElement = document.querySelector(".class")

  _generateMarkup(data) {
    classAndRace.classList.remove("hidden")

    return `
      <h2 class="text-2xl font-bold text-amber-400 font-[Cinzel]">Class</h2>
      <span class="mb-2">${marked.parse(data.hit_dice)}</span>
      <span class="mb-2">${marked.parse(data.hp_at_higher_levels)}</span>
      <span class="mb-2">${marked.parse(data.prof_armor)}</span>
      <span class="mb-2">${marked.parse(data.prof_saving_throws)}</span>
      <span class="mb-2">${marked.parse(data.prof_skills)}</span>
      <span class="mb-2">${marked.parse(data.prof_weapons)}</span>
      <span class="mb-2">${marked.parse(data.equipment)}</span>
      <span class="hidden md:inline">${marked.parse(data.table)}</span>
      <span class="prose prose-h3:text-lg prose-h3:text-amber-400  prose-h4:text-base prose-h4:text-slate-100 text-slate-300 prose-strong:text-slate-100 prose-blockquote:text-slate-300">${marked.parse(data.desc)}</span>
    `
  }
}

export default new ClassView()
