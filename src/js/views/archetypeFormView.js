import View from './view'

class ArchetypeFormView extends View {
  _parentElement = document.querySelector('.class_selected')
  _selectFormInput = document.querySelector('.archetype_selected')

  _generateMarkup(data) {
    let markup = ''
    data.forEach(arch => {
      markup += `
        <option value="${arch.name}">${arch.name}</option>
      `
    })

    return markup
  }

  handlerArchetypeDisplay(handler) {
    this._parentElement.addEventListener('change', function (e) {
      e.preventDefault()
      handler()
    })
  }
}

export default new ArchetypeFormView()
