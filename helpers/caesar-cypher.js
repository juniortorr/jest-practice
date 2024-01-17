let alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const negativeShift = (shift, subAlphabet) => {
  let shiftedLetters = [];
  let counter = shift;
  while (counter !== 0) {
    shiftedLetters.push(subAlphabet.splice(counter, 1));
    counter++;
  }
  const reverseShiftedLetters = shiftedLetters.reverse();
  reverseShiftedLetters.forEach((letter) => {
    subAlphabet.unshift(letter);
  });
};

const positiveShift = (shift, subAlphabet) => {
  let shiftedLetters = subAlphabet.splice(0, shift);
  shiftedLetters.forEach((shiftedLetter) => {
    subAlphabet.push(shiftedLetter);
  });
};

const sanitize = (string) => {
  let punctuationOpts = [',', '.'];
  let sanitizedString = null;
  string = string.toLowerCase();
  for (const punctuation of punctuationOpts) {
    if (string.includes(punctuation)) {
      const removePunctuations = string.split(punctuation).join('');
      if (removePunctuations.includes(' ')) {
        sanitizedString = removePunctuations.split(' ').join('');
      } else sanitizedString = removePunctuations;
      break;
    } else {
      sanitizedString = string;
    }
  }
  return sanitizedString;
};

const getStringIndexes = (string) => {
  let stringIndexes = [];
  for (let i = 0; i < string.length; i++) {
    stringIndexes.push(alphabet.indexOf(string[i]));
  }
  return stringIndexes;
};

const caesarCypher = (string, shift) => {
  let finalResponse = '';
  let subAlphabet = [...alphabet];
  const sanitizedString = sanitize(string);
  sanitizedString;
  const stringIndexes = getStringIndexes(sanitizedString);
  if (shift < 0) negativeShift(shift, subAlphabet);
  else positiveShift(shift, subAlphabet);
  stringIndexes.forEach((index) => {
    finalResponse += subAlphabet[index];
  });
  return finalResponse;
};

export { alphabet, caesarCypher };

caesarCypher('abc', 1);
