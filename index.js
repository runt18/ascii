const _ = require('lodash');
const CHARS = require('./chars');

const CHAR_HEIGHT = 5;
const SPACE_SIZE = 3;

const outputRows = _.times(CHAR_HEIGHT, _.constant(''));

const input = 'dead beef gad';
const spaceChar = ' ';
const fillChar = '#';

const format = (char) =>
  char.replace(/ /g, spaceChar).replace(/#/g, fillChar) + spaceChar;

const fillRow = (callback) => {
  _.times(CHAR_HEIGHT, (index) => {
    outputRows[index] += callback(index);
  });
};

const makeString = (n, char) => _.times(n, _.constant(char)).join('');

_.each(input, (char) => {
  char = char.toLowerCase();
  const data = CHARS[char];

  if (data) {
    fillRow((index) => data[index] + spaceChar);
  }
  else if (char === ' ') {
    fillRow((index) => makeString(SPACE_SIZE, spaceChar));
  }
});

const result = format(outputRows.join('\n'));

console.log(result);
