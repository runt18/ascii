const _ = require('lodash');
const ascii = require('./index');

module.exports = robot => {
    robot.respond(/ascii me\s(\S+)(\s(\S+))?(\s(.+))?/i, response => {
        const {match} = response;

        if (!match[1]) {
            response.send('I need something to asciify');
            return;
        }

        const fillChar = match[2] ? match[2].substring(1) : '#';
        const spaceChar = match[3];

        response.send('\n' + ascii(match[1], fillChar, spaceChar));
    });
};
