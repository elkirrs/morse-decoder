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
    ' ':      ' ',
};

function decode(expr) {
    let numberArray = expr.split(/(\d{10})/).filter(function (el) {
        return el != '';
    });
    let result = '';
    for (i = 0; i < numberArray.length; i++) {
        let array = arr(numberArray[i]);
        result += MORSE_TABLE[newArr(array)];
    }
    return result;
}

function arr(numberArray)
{
    return numberArray.split(/(\d{2})/).filter(function (el) {
        return el != '';
    });
}

function newArr(arr) {
    return arr.map(function(item, i) {
        if (item == 10) {
            return '.';
        }
        if (item == 11) {
            return '-';
        }
        if (item == '**********') {
            return ' ';
        }
    }).join('');
}

module.exports = {
    decode
};