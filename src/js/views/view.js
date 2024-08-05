export default class View {
  _data

  render(data) {
    this._data = data    
    const markup = this._generateMarkup(this._data)
    this._parentElement.innerHTML = ''
    this._parentElement.insertAdjacentHTML('beforeend', markup)
  }

  renderForm(data) {
    this._data = data    
    const markup = this._generateMarkup(this._data)
    this._selectFormInput.innerHTML = ''
    this._selectFormInput.insertAdjacentHTML('beforeend', markup)
  }

  _generateMarkup(data) {
    return `
      <option value="no-options">No Options</option>
    `
  }

  _clear() {
    this._parentElement.innerHTML = ''
  }
}