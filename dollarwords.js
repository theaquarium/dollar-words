const wordFile = 'words_dictionary.json';
const outputFile = 'dollarwords.txt';

const fs = require('fs');
const wordList = JSON.parse(fs.readFileSync(wordFile, 'utf-8'));

const characters = 'abcdefghijklmnopqrstuvwxyz';

let wordArray = Object.keys(wordList);

wordArray.forEach(function(word) {
  let letters = word.split('');
  let val = 0;
  letters.forEach(function(letter) {
    let letterVal = characters.indexOf(letter) + 1;
    if (letterVal > 0) val += letterVal;
  });
  if (val == 100) fs.appendFileSync(outputFile, (word + '\n'));
});
