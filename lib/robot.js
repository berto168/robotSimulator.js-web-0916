'use strict';

class Robot {
  // implement your solution here!


  constructor() {
    this.coordinates = [0,0]
    this.bearing = 'north'
    this.directions = ['north', 'east', 'south', 'west']
  }


orient(direction) {

  if(this.directions.includes(direction)){
    this.bearing = direction
  } else {
    throw new Error('Invalid Robot Bearing')
  }
}

at(x, y) {
  this.coordinates = [x,y]
}

turnRight() {
  var dirValue = this.directions.indexOf(this.bearing)
  if (dirValue === 3){
    this.bearing = 'north'
  } else {
    this.bearing = this.directions[dirValue+1]
  }
}

turnLeft() {
  var dirValue = this.directions.indexOf(this.bearing)
  if (dirValue === 0){
    this.bearing = 'west'
  } else {
    this.bearing = this.directions[dirValue-1]
  }
}

advance() {
  switch(this.bearing) {
    case 'north':
      this.coordinates[1]++
      break;
    case 'south':
      this.coordinates[1]--
      break;
    case 'east':
      this.coordinates[0]++
      break;
    case 'west':
      this.coordinates[0]--
      break;
  }
}

instructions(inst) {
  const translate = {R:'turnRight', L:'turnLeft', A:'advance'}
  var instructions = inst.split('');
  return instructions.map(function(element){
    return translate[element]
  })
}

place(obj) {
  this.bearing = obj['direction']
  this.coordinates = [obj['x'], obj['y']]
}

evaluate(input) {
  var inst = this.instructions(input);
  inst.forEach((element) => {
    this[`${element}`]();
  })
  }
}
