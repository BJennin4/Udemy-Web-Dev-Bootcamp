const franc = require('franc');
const langs = require('langs');
const colors = require('colors');
const input = process.argv[2];

try {
const stringTest = franc(input);
const language = langs.where('3',stringTest);
console.log(`Our best guess is ${language.name}`.green);
} catch (e) {
    console.log('A language match could not be found with the given sample. Please try another language sample.'.red);
}