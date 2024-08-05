import { marked } from 'marked'
import View from './view'

class PathsView extends View {
  _parentElement = document.querySelector('.archetypes')

  _generateMarkup(data) {
    const archetypesData = data
    let markup = `
      <h2 class="title">Archetype</h2>
      <div class="rendered_subrace">
        <span class="title2"><b>${marked.parse(data.name)}</b></span>
        <span>${marked.parse(data.desc)}</span>
      </div>
    `

    return markup
  }
}

export default new PathsView()