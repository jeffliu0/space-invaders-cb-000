class CrewMember {
  constructor(position){
    this.position = position
    this.currentShip = new Spaceship()
  }

  engageWarpDrive(){
    if(this.currentShip == 'Looking for a Rig'){
      return "had no effect"
    }
    else if(this.position == 'Pilot'){
      this.currentShip = new Spaceship()
      this.currentShip.warpDrive = 'engaged'
      return 'engaged'
    }
  }

  setsInvisibility(){
    if(this.currentShip == 'Looking for a Rig'){
      return "had no effect"
    }
    else if(this.position == 'Defender'){
      this.currentShip = new Spaceship()
      this.currentShip.cloaked = true
      return true
    }
  }

  chargePhasers(){
    if(this.currentShip == 'Looking for a Rig'){
      return "had no effect"
    }
    else if(this.position == 'Gunner'){
      this.currentShip = new Spaceship()
      this.currentShip.phasers = 'charged'
      return 'charged'
    }
  }
}
