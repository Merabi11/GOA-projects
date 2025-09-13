const { Chance } = require('chance');
const { greetUser, guessNumber } = require('./functions.js');

console.log(greetUser('merabi'));
console.log(greetUser('lika'));
console.log(guessNumber(5));

const chance = new Chance();

console.log(chance.name());
console.log(chance.age());
console.log(chance.birthday());
console.log(chance.address());

// import { greetUser, guessNumber } from './functions.js';

// console.log(greetUser('merabi'));
// console.log(guessNumber(5));
