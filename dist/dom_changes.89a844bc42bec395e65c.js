/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
var fromSelect = document.querySelectorAll('#types')[0];
var toSelect = document.querySelectorAll('#types')[1];

var input = document.querySelector('#input');
var inputLabel = document.querySelector('#input-label');

var output = document.querySelector('#output');
var outputLabel = document.querySelector('#output-label');

var convertButton = document.querySelector('#convert-button');
var resetButton = document.querySelector('#reset-button');

// Event listeners

fromSelect.addEventListener('change', () => {
  inputLabel.innerHTML = `Enter ${fromSelect.value} number`;

  if (fromSelect.value === 'decimal') input.placeholder = 'Only numbers from 0 to 9';

  if (fromSelect.value === 'binary') input.placeholder = 'Only numbers 0 and 1';

  if (fromSelect.value === 'octal') input.placeholder = 'Only numbers from 0 to 7';

  if (fromSelect.value === 'hexadecimal') input.placeholder = 'Only numbers from 0 to 9 and letters from "a" to "e" or "A" to "E"';

  if (fromSelect.value === 'text') input.placeholder = 'Enter a text';

  checkInput(input);
});

toSelect.addEventListener('change', (e) => {
  outputLabel.innerHTML = `${e.target.value[0].toUpperCase() + e.target.value.slice(1)} ${e.target.value === 'text' ? '' : 'number'}`;
});

input.addEventListener('keyup', (e) => checkInput(e.target));

convertButton.onclick = () => outputConvertedNumber();

resetButton.onclick = () => cleanInputAndOutput();

// Funções auxiliares

function checkInput(element) {
  const target = element;
  const val = element.value;

  const setBackgroundAndButtonToNormalState = () => {
    target.style.backgroundColor = '#fdfcfa';
    convertButton.disabled = false;
  };

  if (fromSelect.value === 'decimal') {
    if (!/^[0-9]+$/.test(val) && val.length > 0) {
      target.style.backgroundColor = '#ff4c3033';
      convertButton.disabled = true;
    } else setBackgroundAndButtonToNormalState();
  }

  if (fromSelect.value === 'binary') {
    if (!/^[0-1]+$/.test(val) && val.length > 0) {
      target.style.backgroundColor = '#ff4c3033';
      convertButton.disabled = true;
    } else setBackgroundAndButtonToNormalState();
  }

  if (fromSelect.value === 'octal') {
    if (!/^[0-7]+$/.test(val) && val.length > 0) {
      target.style.backgroundColor = '#ff4c3033';
      convertButton.disabled = true;
    } else setBackgroundAndButtonToNormalState();
  }

  if (fromSelect.value === 'hexadecimal') {
    if (!/^[0-9a-fA-F]+$/.test(val) && val.length > 0) {
      target.style.backgroundColor = '#ff4c3033';
      convertButton.disabled = true;
    } else setBackgroundAndButtonToNormalState();
  }

  if (fromSelect.value === 'text') setBackgroundAndButtonToNormalState();
}

// Não funciona para números muito grandes, refazer usando
// o algoritmo matemático
function convertNumberBetweenBases(number, base1, base2) {
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

  if (!inputValue) cleanInputAndOutput();
}

function cleanInputAndOutput() {
  input.value = '';
  output.innerHTML = '';

  checkInput(input);
}

/******/ })()
;
//# sourceMappingURL=dom_changes.89a844bc42bec395e65c.js.map