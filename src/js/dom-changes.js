var fromSelect = document.querySelectorAll('#types')[0];
var toSelect = document.querySelectorAll('#types')[1];

var input = document.querySelector('#input');
var inputLabel = document.querySelector('#input-label');

var output = document.querySelector('#output');
var outputLabel = document.querySelector('#output-label');

var convertButton = document.querySelector('#convert-button');
var resetButton = document.querySelector('#reset-button');
var swapButton = document.querySelector('#swap-button');

// Event listeners do buttons

fromSelect.addEventListener('change', (e) => {
  checkLabels();
  console.log(e.target.value);
  checkPlaceholders();
  console.log('to select');
  checkInput(input);
});

toSelect.addEventListener('change', (e) => {
  checkLabels();
  console.log('to select');
  console.log(e.target.value);
  checkPlaceholders();

  checkInput(input);
});

input.addEventListener('keyup', (e) => checkInput(e.target));

convertButton.onclick = () => outputConvertedNumber();

resetButton.onclick = () => {
  cleanInput();

  cleanOutput();
};

swapButton.onclick = () => swapSelectsValues();

// Funções auxiliares de cálculo

// Não funciona para números muito grandes, refazer usando
// o algoritmo matemático
// function convertNumberBetweenBases_OLD(number, base1, base2) {
//   return parseInt(number, base1).toString(base2);
// }

// Função de mudança de base nova
function convertNumberBetweenBases(number, base1, base2) {
  const chars = [...number].reverse();

  let newNumberInBase10 = chars.reduce((acc, val, idx) => {
    val = val.toUpperCase();
    console.log((val.charCodeAt(0) - 55) * base1 ** idx);
    if (['A', 'B', 'C', 'D', 'E', 'F'].includes(val)) return acc + (val.charCodeAt(0) - 55) * base1 ** idx;
    else if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(val)) return acc + Number(val) * base1 ** idx;
  }, 0);

  if (base2 === 10) return newNumberInBase10;

  let q = newNumberInBase10;
  let newNumberInNotBase10 = [];

  const base16 = {
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F',
  };

  while (q > 0) {
    rest = q % base2;

    if (rest in base16) rest = base16[rest];

    newNumberInNotBase10 = [...newNumberInNotBase10, rest];

    q = Math.floor(q / base2);
  }

  newNumberInNotBase10.reverse();

  return newNumberInNotBase10.join('');
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

  if (bases['types'].includes(fromSelectValue) && bases['types'].includes(toSelectValue) && inputValue)
    output.innerHTML = convertNumberBetweenBases(inputValue, bases[fromSelectValue], bases[toSelectValue]);

  if (fromSelectValue === 'text' && inputValue) output.innerHTML = convertTextToNumberByBase(inputValue, bases[toSelectValue]);

  if (toSelectValue === 'text' && inputValue) output.innerHTML = convertNumberByBaseToText(inputValue, bases[fromSelectValue]);

  if (toSelectValue === fromSelectValue) output.innerHTML = inputValue;

  if (!inputValue) {
    cleanInput();
    cleanOutput();
  }
}

// Funções auxiliares de manipulação do DOM

function swapSelectsValues() {
  const fromSelectValue = fromSelect.value;
  const toSelectValue = toSelect.value;

  fromSelect.value = toSelectValue;
  toSelect.value = fromSelectValue;

  checkInput(input);
}

function checkInput(element) {
  const target = element;
  const val = element.value;

  const setBackgroundAndButtonToNormalState = () => {
    target.style.backgroundColor = '#fdfcfa';
    convertButton.disabled = false;
  };

  const setBackgroundAndButtonToDisabledState = () => {
    target.style.backgroundColor = '#ff4c3033';
    convertButton.disabled = true;
  };

  if (fromSelect.value === 'decimal') {
    if (!/^[0-9]+$/.test(val) && val.length > 0) setBackgroundAndButtonToDisabledState();
    else setBackgroundAndButtonToNormalState();
  }

  if (fromSelect.value === 'binary') {
    if (!/^[0-1]+$/.test(val) && val.length > 0) setBackgroundAndButtonToDisabledState();
    else setBackgroundAndButtonToNormalState();
  }

  if (fromSelect.value === 'octal') {
    if (!/^[0-7]+$/.test(val) && val.length > 0) setBackgroundAndButtonToDisabledState();
    else setBackgroundAndButtonToNormalState();
  }

  if (fromSelect.value === 'hexadecimal') {
    if (!/^[0-9a-fA-F]+$/.test(val) && val.length > 0) setBackgroundAndButtonToDisabledState();
    else setBackgroundAndButtonToNormalState();
  }

  if (fromSelect.value === 'text') setBackgroundAndButtonToNormalState();
}

function checkPlaceholders() {
  if (fromSelect.value === 'decimal') input.placeholder = 'Only numbers from 0 to 9';

  if (fromSelect.value === 'binary') input.placeholder = 'Only numbers 0 and 1';

  if (fromSelect.value === 'octal') input.placeholder = 'Only numbers from 0 to 7';

  if (fromSelect.value === 'hexadecimal') input.placeholder = 'Only numbers from 0 to 9 and letters from "a" to "e" or "A" to "E"';

  if (fromSelect.value === 'text') input.placeholder = 'Enter a text';
}

function checkLabels() {
  const fromSelectValue = fromSelect.value;
  const toSelectValue = toSelect.value;

  inputLabel.innerHTML = `Enter ${fromSelectValue} number`;

  outputLabel.innerHTML = `${toSelectValue[0].toUpperCase() + toSelectValue.slice(1)} ${toSelectValue === 'text' ? '' : 'number'}`;
}

function cleanOutput() {
  output.innerHTML = '';

  checkInput(input);
}

function cleanInput() {
  input.value = '';

  checkInput(input);
}
