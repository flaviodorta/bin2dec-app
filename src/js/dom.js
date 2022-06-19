var fromSelect = document.querySelectorAll('#types')[0];
var toSelect = document.querySelectorAll('#types')[1];
var input = document.querySelector('#input');
var inputLabel = document.querySelector('#input-label');
var outputLabel = document.querySelector('#output-label');

fromSelect.addEventListener('change', () => {
  inputLabel.innerHTML = `Enter ${fromSelect.value} number`;

  if (fromSelect.value === toSelect.value) input.backgroundColor = '#ff4c3033';
  else input.backgroundColor = '#fdfcfa';

  if (fromSelect.value === 'decimal') input.placeholder = 'Only numbers from 0 to 9';

  if (fromSelect.value === 'binary') input.placeholder = 'Only numbers 0 and 1';

  if (fromSelect.value === 'octal') input.placeholder = 'Only numbers from 0 to 7';

  if (fromSelect.value === 'hexadecimal') input.placeholder = 'Only numbers from 0 to 9, and letters from "a" to "e" or "A" to "E"';

  if (fromSelect.value === 'text') input.placeholder = 'Enter a text';
});

toSelect.addEventListener('change', (e) => {
  outputLabel.innerHTML = `${e.target.value[0].toUpperCase() + e.target.value.slice(1)} ${e.target.value === 'text' ? '' : 'number'}`;
});

input.addEventListener('keyup', (e) => {
  if (fromSelect.value === 'decimal')
    if (!/^[0-9]+$/.test(e.target.value)) e.target.style.backgroundColor = '#ff4c3033';
    else e.target.style.backgroundColor = '#fdfcfa';

  if (fromSelect.value === 'binary')
    if (!/^[0-1]+$/.test(e.target.value)) e.target.style.backgroundColor = '#ff4c3033';
    else e.target.style.backgroundColor = '#fdfcfa';

  if (fromSelect.value === 'octal')
    if (!/^[0-7]+$/.test(e.target.value)) e.target.style.backgroundColor = '#ff4c3033';
    else e.target.style.backgroundColor = '#fdfcfa';

  if (fromSelect.value === 'hexadecimal')
    if (!/^[0-9a-fA-F]+$/.test(e.target.value)) e.target.style.backgroundColor = '#ff4c3033';
    else e.target.style.backgroundColor = '#fdfcfa';

  if (fromSelect.value === 'text')
    if (!/^[0-9]+$/.test(e.target.value)) e.target.style.backgroundColor = '#ff4c3033';
    else e.target.style.backgroundColor = '#fdfcfa';
});
