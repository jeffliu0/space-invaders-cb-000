class Spaceship {
  constructor(name, team, phasers, shields){
    this.name = name
    this.member = team
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.docked = true
    this.phasersCharge = 'uncharged'
  }
}
