function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const randomAnonymousFunction = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min);
}

const randomArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) -min);
}

const randomArrowFunctionCompact = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);


// Når der bliver brugt () er det tegn på det er en callback. 
function genericActionPerfomer(genericAction, genericName) {
  return genericAction(genericName)
}
const substract = (name) => `${name} is substracting`;
const walk = (name) => `${name} is walking`;
const read = (name) => `${name} is reading`;

console.log(genericActionPerfomer(substract, 'Tobias'));
console.log(genericActionPerfomer(walk, 'Nicloas'));
console.log(genericActionPerfomer((name) => `${name} is reading`, 'Andreas'));
