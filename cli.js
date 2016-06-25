const _ = require('lodash');
const args = require('minimist')(_.slice(process.argv, 2));
const ascii = require('./index');

if (args._.length === 0) {
    console.log('Please provide a string to convert');
    process.exit();
}

console.log(ascii(args._[0], _.slice(args._, 1), args.space));
