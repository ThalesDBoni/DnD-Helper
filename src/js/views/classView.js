import { marked } from "marked"
import View from "./view.js"

class ClassView extends View {
  _parentElement = document.querySelector(".class")

  _generateMarkup(data) {
    return `
      <span class="">${marked.parse(data.hit_dice)}</span>
      <span class="">${marked.parse(data.hp_at_higher_levels)}</span>
      <span class="">${marked.parse(data.prof_armor)}</span>
      <span class="">${marked.parse(data.prof_saving_throws)}</span>
      <span class="">${marked.parse(data.prof_skills)}</span>
      <span class="">${marked.parse(data.prof_weapons)}</span>
      <span class="">${marked.parse(data.equipment)}</span>
      <span class="hidden md:inline">${marked.parse(data.table)}</span>
      <span class="prose">${marked.parse(data.desc)}</span>
    `
  }
}

export default new ClassView()
