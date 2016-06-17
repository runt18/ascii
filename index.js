const _ = require('lodash');

const CHAR_SIZE = 5;
const SPACE_SIZE = 3;
const CHARS = require('./chars');

const outputRows = _.times(CHAR_SIZE, _.constant(''));

const input = 'abc abc';
const spaceChar = ' ';
const fillChar = 'X';

const format = (char) =>
  char.replace(/O/g, spaceChar).replace(/X/g, fillChar) + spaceChar;

_.each(input, (char) => {
  if (CHARS[char]) {
    _.times(CHAR_SIZE, (index) => {
      outputRows[index] += CHARS[char][index] + spaceChar;
    });
  }

  if (char === ' ') {
    _.times(CHAR_SIZE, (index) => {
      outputRows[index] += _.times(SPACE_SIZE, _.constant(spaceChar)).join('');
    });
  }
});

const result = format(outputRows.join('\n'));

console.log(result);
