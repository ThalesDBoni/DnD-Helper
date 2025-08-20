import { marked } from 'marked'
import View from './view'

class SubraceView extends View {
  _parentElement = document.querySelector('.sheet_subrace')

  _generateMarkup(data) {
    const subraceData = data
    let markup = `
    <h2 class="text-amber-400 font-[Cinzel] font-bold text-2xl">Subrace</h2>
    <div class="flex flex-col gap-2.5">
      <span class="text-lg font-bold text-amber-400"><b>${marked.parse(data.name)}</b></span>
      <span class="mb-2">${marked.parse(data.desc)}</span>
      <span class="prose-p:mb-2">${marked.parse(data.traits)}</span>
    </div>
    `

    return markup
  }
}

export default new SubraceView()