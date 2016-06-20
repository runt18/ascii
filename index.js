const _ = require('lodash');
const CHARS = require('./chars');

const CHAR_HEIGHT = 5;
const SPACE_SIZE = 3;

module.exports = (input, fillChar, spaceChar) => {
    fillChar = fillChar || '#';
    spaceChar = spaceChar || ' ';

    const outputRows = _.times(CHAR_HEIGHT, _.constant(''));

    const format = (char) =>
      char.replace(/ /g, spaceChar).replace(/#/g, fillChar);

    const fillRow = (callback) => {
        _.times(CHAR_HEIGHT, (index) => {
            outputRows[index] += callback(index);
        });
    };

    _.each(input, (char) => {
        char = _.toLower(char);
        const data = CHARS[char];

        if (data) {
            fillRow((index) => data[index] + spaceChar);
        }
        else if (char === ' ') {
            fillRow((index) => _.repeat(spaceChar, SPACE_SIZE));
        }
    });

    return '\n' + format(
        outputRows
            .map((r) => r.substring(0, r.length - 1))
            .join('\n')
    );
};
