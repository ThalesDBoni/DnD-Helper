import { marked } from 'marked'
import View from './view'

class SubraceView extends View {
  _parentElement = document.querySelector('.sheet_subrace')

  _generateMarkup(data) {
    const subraceData = data
    let markup = `
    <h2 class="text-red-600 font-bold text-2xl">Subrace</h2>
    <div class="flex flex-col gap-2.5">
      <span class="text-xl text-red-600"><b>${marked.parse(data.name)}</b></span>
      <span>${marked.parse(data.desc)}</span>
      <span>${marked.parse(data.traits)}</span>
    </div>
    `

    return markup
  }
}

export default new SubraceView()