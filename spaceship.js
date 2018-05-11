class Spaceship {
  constructor(name, team, phasers, shields){
    this.name = name
    this.team = team
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    if(team.length == 0){
      this.docked = true
    }
    else{
      this.docked = false
      member.forEach(element=>{
        element.currentShip = this
      })
    }
    this.phasersCharge = 'uncharged'
  }
}
