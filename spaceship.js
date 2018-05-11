class Spaceship {
  constructor(name, arrplacer, phasers, shields){
    this.name = name
    this.placer = arrplacer
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.docked = false
    this.phasersCharge = 'uncharged'
  }
}
