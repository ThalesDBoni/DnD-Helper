import { marked } from 'marked'
import View from './view'

class SubraceView extends View {
  _parentElement = document.querySelector('.sheet_subrace')

  _generateMarkup(data) {
    const subraceData = data
    let markup = `
    <h2 class="title">Subrace</h2>
    <div class="rendered_subrace">
      <span class="title2"><b>${marked.parse(data.name)}</b></span>
      <span>${marked.parse(data.desc)}</span>
      <span>${marked.parse(data.traits)}</span>
    </div>
    `

    return markup
  }
}

export default new SubraceView()