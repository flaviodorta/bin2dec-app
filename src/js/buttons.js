var fromSelect = document.querySelectorAll('#types')[0];
var toSelect = document.querySelectorAll('#types')[1];

var input = document.querySelector('#input');
var output = document.querySelector('#output');

var convertButton = document.querySelector('#convert-button');
var resetButton = document.querySelector('#reset-button');

// Funções auxiliares
function convertNumberByBase(number, base1, base2) {
  return parseInt(number, base1).toString(base2);
}

function convertNumberByBaseToText(number, base) {
  return number
    .split(' ')
    .map((el) => String.fromCharCode(parseInt(el, base)))
    .join('');
}

function convertTextToNumberByBase(text, base) {
  return [...text].map((el) => el.charCodeAt(0).toString(base)).join(' ');
}

// Funções que vão ser chamadas no event listener da tag HTML
function outputConvertedNumber() {
  const bases = {
    types: ['decimal', 'binary', 'octal', 'hexadecimal'],
    decimal: 10,
    binary: 2,
    octal: 8,
    hexadecimal: 16,
  };

  const inputValue = input.value;

  const fromSelectValue = fromSelect.value;
  const toSelectValue = toSelect.value;

  if (bases['types'].includes(fromSelectValue) && bases['types'].includes(toSelectValue))
    output.innerHTML = convertNumberByBase(inputValue, bases[fromSelectValue], bases[toSelectValue]);

  if (fromSelectValue === 'text') output.innerHTML = convertTextToNumberByBase(inputValue, bases[toSelectValue]);

  if (toSelectValue === 'text') output.innerHTML = convertNumberByBaseToText(inputValue, bases[fromSelectValue]);
}

function cleanInput() {
  input.value = '';
}
