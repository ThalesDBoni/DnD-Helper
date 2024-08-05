import { marked } from "marked";
import View from "./view.js";

class ClassView extends View {
  _parentElement = document.querySelector('.class')

  _generateMarkup(data) {
    return `
      <span>${marked.parse(data.hit_dice)}</span>
      <span>${marked.parse(data.hp_at_higher_levels)}</span>
      <span>${marked.parse(data.prof_armor)}</span>
      <span>${marked.parse(data.prof_saving_throws)}</span>
      <span>${marked.parse(data.prof_skills)}</span>
      <span>${marked.parse(data.prof_weapons)}</span>
      <span>${marked.parse(data.equipment)}</span>
      <span class="responsive-hidden">${marked.parse(data.table)}</span>
      <span>${marked.parse(data.desc)}</span>
    `
  }
}

export default new ClassView()