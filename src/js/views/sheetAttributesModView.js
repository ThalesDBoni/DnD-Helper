import View from "./view";

class sheetAttributesModView extends View {
  _strengthMod = document.querySelector('.sheet__data-strength-mod')
  _dexterityMod = document.querySelector('.sheet__data-dexterity-mod')
  _constitutionMod = document.querySelector('.sheet__data-constitution-mod')
  _intelligenceMod = document.querySelector('.sheet__data-intelligence-mod')
  _wisdomMod = document.querySelector('.sheet__data-wisdom-mod')
  _charismaMod = document.querySelector('.sheet__data-charisma-mod')

  displayAttributes(data) {
    this._strengthMod.textContent = data.strength
    this._dexterityMod.textContent = data.dexterity
    this._constitutionMod.textContent = data.constitution
    this._intelligenceMod.textContent = data.intelligence
    this._wisdomMod.textContent = data.wisdom
    this._charismaMod.textContent = data.charisma
  }
}

export default new sheetAttributesModView()