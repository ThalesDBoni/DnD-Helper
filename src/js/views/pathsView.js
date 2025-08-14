import { marked } from 'marked'
import View from './view'

class PathsView extends View {
  _parentElement = document.querySelector('.archetypes')

  _generateMarkup(data) {
    const archetypesData = data
    let markup = `
      <h2 class="text-2xl font-bold text-red-600">Archetype</h2>
      <div class="flex flex-col gap-2.5">
        <span class="text-xl text-red-600"><b>${marked.parse(data.name)}</b></span>
        <span class="prose">${marked.parse(data.desc)}</span>
      </div>
    `

    return markup
  }
}

export default new PathsView()