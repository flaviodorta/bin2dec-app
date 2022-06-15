(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// geting canvas by Boujjou Achraf
var c = document.getElementById('c');
var ctx = c.getContext('2d');

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var matrix =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}';
//converting the string into an array of single characters
matrix = matrix.split('');

var font_size = 10;
var columns = c.width / font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for (var x = 0; x < columns; x++) drops[x] = 1;

//drawing the characters
function draw() {
  //Black BG for the canvas
  //translucent BG to show trail
  ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
  ctx.fillRect(0, 0, c.width, c.height);

  ctx.fillStyle = '#f4427d'; //green text
  ctx.font = font_size + 'px arial';
  //looping over drops
  for (var i = 0; i < drops.length; i++) {
    //a random chinese character to print
    var text = matrix[Math.floor(Math.random() * matrix.length)];
    //x = i*font_size, y = value of drops[i]*font_size
    ctx.fillText(text, i * font_size, drops[i] * font_size);

    //sending the drop back to the top randomly after it has crossed the screen
    //adding a randomness to the reset to make the drops scattered on the Y axis
    if (drops[i] * font_size > c.height && Math.random() > 0.975) drops[i] = 0;

    //incrementing Y coordinate
    drops[i]++;
  }
}

setInterval(draw, 35);

},{}]},{},[1]);
