// part 1
class bigCat {
  constructor(color, weight, furrLevel) {
    this.color = color;
    this.weight = weight;
    this.furrLevel = furrLevel;
  }
  purr(bigCat){
    console.log("bigCat ," + 'purr')
  }
}

class smallCat {
  constructor(color, weight, furrLevel) {
  this.color = color;
  this.weight = weight;
  this.furrLevel = furrLevel;
  }
  purr(smallCat){
    console.log("smallCat ," + 'purr')
  }
}

// part 2
name: 'carPerson'
let cats = ["blackCat", "blueCat", "greenCat", "redCat", "goldCat", "pinkCat"
];

let blueCat = {color: ""}



// part 3

class Pirate {
  constructor(beardLength, missingLimbs, eyePatches) {
    this.beardLength = beardLength;
    this.missingLimbs = missingLimbs;
    this.eyePatches = eyePatches;
  }
  argh(){
    console.log('argh')
  }
  ayeMate(){
    console.log('ayeMate')
  }
}

let Jolly Roger = ['']

const captain kidd = {
  beardLength: "10 inches",
  missingLimbs: "0",
  eyePatches: "1",
  dataLog: function() {
    return this.beardLength + this.missingLimbs + this.eyePatches;
  }
};


const blackBeard = {
  beardLength: "20 inches"
  missingLimbs: "1"
  eyePatches: "1"
  dataLog: function() {
    return this.beardLength + this.missingLimbs + this.eyePatches;
  }
};


const luffy = {
  beardLength: "0 inches"
  missingLimbs: "0"
  eyePatches: "Hes got a straw hat"
  dataLog: function() {
    return this.beardLength + this.missingLimbs + this.eyePatches;
  }
};
