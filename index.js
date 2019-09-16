class BoardMember (name, homeState, training) {
  this.name = name
  this.homeState = homeState
  this.training = training
}

BoardMember.prototype.veto = function() {
  console.log("No, I must disagree")
}
