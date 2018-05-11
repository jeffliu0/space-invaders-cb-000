class CrewMember {
  constructor(position){
    this.position = position
    this.currentShip = "Looking for a Rig"
  }

  engageWarpDrive(){
    if(this.currentShip == 'Looking for a Rig'){
      return "had no effect"
    }
    else if(this.position == 'Pilot'){
      this.currentShip = new Spaceship()
      this.currentShip.warpDrive = 'engaged'
    }
  }

  setsInvisibility(){
    if(this.currentShip == 'Looking for a Rig'){
      return "had no effect"
    }
    else{
      return
    }
  }

  chargePhasers(){
    if(this.currentShip == 'Looking for a Rig'){
      return "had no effect"
    }
    else if(this.position == 'Gunner'){
      this.currentShip = new Spaceship()
      this.currentShip.phasers = 'charged'
    }
  }
}
