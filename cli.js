const _ = require('lodash');
const ascii = require('./index');

const args = _.slice(process.argv, 2);

if (args.length === 0) {
    console.log('Please provide a string to convert');
    process.exit();
}

console.log(ascii(args[0], args[1], args[2]));
