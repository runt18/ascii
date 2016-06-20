const _ = require('lodash');
const ascii = require('./index');

module.exports = robot => {
    robot.respond(/ascii me\s(\S+)(\s\S+)?/i, response => {
        const match = response.match;

        if (!match[1]) {
            response.send('I need something to asciify');
            return;
        }

        const fillChar = match[2] ? _.trim(match[2]) : ':fire:';
        const spaceChar = ':spacergif:';

        response.send('\n' + ascii(match[1], fillChar, spaceChar));
    });
};
