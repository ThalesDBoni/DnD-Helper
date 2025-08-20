import { marked } from "marked"
import View from "./view"

class PathsView extends View {
  _parentElement = document.querySelector(".archetypes")

  _generateMarkup(data) {
    const archetypesData = data
    let markup = `
      <h2 class="text-2xl font-bold font-[Cinzel] text-amber-400 mt-4">Archetype</h2>
      <div class="flex flex-col gap-2.5">
        <span class="text-lg text-amber-400"><b>${marked.parse(data.name)}</b></span>
        <span class="prose prose-li:text-slate-300 prose-p:text-slate-300 prose-h5:text-[1rem] prose-h5:text-amber-400 prose-h4:text-slate-100  prose-strong:text-slate-100 prose-table:text-slate-300">${marked.parse(data.desc)}</span>
      </div>
    `

    return markup
  }
}

export default new PathsView()
