import View from "./view";

class sheetAttributesView extends View {
  _strength = document.querySelector('.sheet__data-strength')
  _dexterity = document.querySelector('.sheet__data-dexterity')
  _constitution = document.querySelector('.sheet__data-constitution')
  _intelligence = document.querySelector('.sheet__data-intelligence')
  _wisdom = document.querySelector('.sheet__data-wisdom')
  _charisma = document.querySelector('.sheet__data-charisma')
  _ca = document.querySelector('.ca')
  _life = document.querySelector('.life')
  _initiative = document.querySelector('.initiative')
  _bonusProf = document.querySelector('.bonus-prof')

  displayAttributes(data) {
    this._strength.textContent = data.strength
    this._dexterity.textContent = data.dexterity
    this._constitution.textContent = data.constitution
    this._intelligence.textContent = data.intelligence
    this._wisdom.textContent = data.wisdom
    this._charisma.textContent = data.charisma
    this._ca.textContent = data.ca
    this._life.textContent = data.life
    this._initiative.textContent = data.initiative
    this._bonusProf.textContent = data.profBonus
  }
}

export default new sheetAttributesView()