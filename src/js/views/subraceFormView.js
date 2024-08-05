import View from "./view";

class SubraceFormView extends View {
  _parentElement = document.querySelector('.race_selected')
  _selectFormInput = document.querySelector('.subrace_selected')

  _generateMarkup(data) {
    let markup = ''
    
    if (data.length > 0) {
      data.forEach(sub => {
        markup += `
          <option value="${sub.name}">${sub.name}</option>
        `
      })
    }

    if (data.length === 0) {
      markup += `
          <option value="No Options">No Options</option>
      `
    }

    return markup
  }

  handlerSubraceDisplay(handler) {
    this._parentElement.addEventListener('change', function (e) {
      e.preventDefault()
      handler()
    })
  }
}

export default new SubraceFormView()