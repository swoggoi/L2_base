Array.prototype.square = function() {
  let mas = [];
  for (let i = 0; i < this.length; i++) {
    mas.push(this[i] * this[i]);
  }
  return mas; 
}

Array.prototype.cube = function() {
  let mas = [];
  for (let i = 0; i < this.length; i++) {
    mas.push(this[i] * this[i] * this[i]);
  }
  return mas;
}

Array.prototype.sum = function() {
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum;
}

Array.prototype.average = function() {

  return  this.sum() / this.length;
}

Array.prototype.even = function() {
  let mas = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] % 2 === 0) {
      mas.push(this[i]);
    }
  }
  return mas;
}

Array.prototype.odd = function() {
  let mas = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] % 2 !== 0) {
      mas.push(this[i]);
    }
  }
  return mas;
}
