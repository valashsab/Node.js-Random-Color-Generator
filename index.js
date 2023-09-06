import chalk from 'chalk';

// generates hex code
let letters = '0123456789ABCDEF';

let color = '#';

for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];

console.log(color);

// prints block of 31x9 # characters
const character = '#';

const width = 31;
const height = 9;
let block = '';

for (let row = 0; row < height; row++) {
  // Loop through each column
  for (let col = 0; col < width; col++) {
    // Concatenate "#" to the block
    block += '#';
  }
  // Add a new line after each row
  block += '\n';
}
console.log(block);

// color the block and hex code
const cc = require('node-console-colors');
console.log(cc.set('color', 'block'));

/*
console.log(cc.set('fg_red', 'Hello World in red'));
const cc = require('node-console-colors');

console.log(cc.set('fg_red', 'Hello World in red'));

console.log(cc.set('fg_blue', 'Hello World in blue'));

console.log(
  cc.set(
    'fg_green',
    'bg_dark_grey',
    'Hello World',
    'in fg_green and bg_dark_gray',
  ),
);
