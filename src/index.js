const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  const split = expr.match(/.{1,10}/g); // split for words
  const split2 = split.map(item => item.match(/.{1,2}/g)); // split for morse signals

  let morseCode = '';

  // decode into morse signal
  split2.forEach(char => {
    if (char.every(elem => elem == '**')) {
      morseCode += ' ';
    };
    char.forEach(code => {
      if (code === '11') {
        morseCode += '-';
      }
      if (code === '10') {
        morseCode += '.';
      }
    });
    morseCode += '|'; // split morse words
  });

  let result = '';

  // decode morse into word
  morseCode.split('|').forEach(letter => {
    if (letter === ' ') {
      result += ' ';
    } else if (MORSE_TABLE[letter]) {
      result += MORSE_TABLE[letter];
    }
  });

  return result;
}

module.exports = {
    decode
}