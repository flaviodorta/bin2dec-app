/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
var bg = document.querySelector('#background');

var ctx = bg.getContext('2d');

bg.height = window.screen.availHeight;
bg.width = window.screen.availWidth;

var fontSize = 10;
var columns = bg.width / fontSize;

var drops = [];

for (let x = 0; x < columns; x++) drops[x] = 1;

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
  ctx.fillRect(0, 0, bg.width, bg.height);

  ctx.fillStyle = '#008f11';
  ctx.font = fontSize + "px 'JetBrains mono'";

  for (let i = 0; i < drops.length; i++) {
    const text = Math.round(Math.random());
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > bg.height && Math.random() > 0.995) drops[i] = 0;

    drops[i]++;
  }
}

setInterval(draw, 50);

/******/ })()
;
//# sourceMappingURL=matrix.47bb0e248e075e1d379c.js.map