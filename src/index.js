const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function transformKey(str) {
  let res = '';
  const dict = { '.': '10', '-': '11' };
  const arr = str.split('');
  arr.map((e, i) => {
    res += dict[e];
  });
  return res.toString().padStart(10, '0');
}

function decode(expr) {
  // write your solution here
  const arr = expr.split('');
  let buff = '';
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    buff += arr[i];
    if (i !== 0 && i !== len - 1 && (i + 1) % 10 === 0) {
      buff += ';';
    }
  }

  const Dict = {};
  for (const [key, value] of Object.entries(MORSE_TABLE)) {
    let transformedKey = transformKey(key);
    Dict[transformedKey] = value;
  }
  Dict['**********'] = ' ';

  return buff
    .split(';')
    .map((e) => Dict[e])
    .join('');
}

module.exports = {
  decode,
};
