const $ = require('jquery');

// Função auxiliar para obter o tamanho das linhas e colunas da matriz
const quantityOfMatrixElements = (matrix) => {
  const numberOfRowElements = matrix.length;
  const numberOfColumnElements = matrix[0].length;
  return [numberOfRowElements, numberOfColumnElements];
};

// Função para gerar a matriz
const createMatrix = () => {
  const numberOfColumnElements = Math.floor(window.innerWidth / 5) + 1 + 1;
  const numberOfRowElements = Math.floor(window.innerHeight / 5) + 1 + 1;
  const matrix = new Array(numberOfRowElements).fill(
    new Array(numberOfColumnElements)
  );
  console.log(numberOfRowElements, ' ', matrix.length);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < numberOfColumnElements; j++) {
      matrix[i][j] = Math.round(Math.random());
    }
  }
  return matrix;
};

// Função para mutar aleatóriamente um elemento da matriz
const mutateMatrix = (matrix) => {
  const [numberOfRowElements, numberOfColumnElements] =
    quantityOfMatrixElements(matrix);
  const randomRowIdx = Math.floor(Math.random() * numberOfRowElements);
  const randomColumnIdx = Math.floor(Math.random() * numberOfColumnElements);
  const randomBinary = Math.round(Math.random());
  matrix[randomRowIdx][randomColumnIdx] = randomBinary;
};

const turnArrayToText = (array) => {
  return array.reduce((acc, el) => {
    return acc + el;
  }, '');
};
// Função para atrelar os números binários no texto html do background
const appendBinariesToBackground = (matrix) => {
  const [numberOfRowElements, _] = quantityOfMatrixElements(matrix);

  for (let i = 0; i < numberOfRowElements; i++) {
    const rowElement = document.createElement('p');
    const rowText = document.createTextNode(turnArrayToText(matrix[i]));
    rowElement.appendChild(rowText);
    rowElement.classList.add('row');
    $('.background').append(rowElement);
    $('.background').append('</br>');
  }
};

// Como criar uma função que recebe um quantidade desconhecida de funções
// que podem ter ou não argumentos
// const testPerformance = (...functions) => {
//   let t0, t1;
//   t1 = performance.now();
//   for (let i = 0; i < functions.length; i++) {
//     functions[i]();
//   }
//   t2 = performance.now();
//   return console.log(`Execution time: ${t1 - t0}ms`);
// };

$(document).ready(() => {
  let t0, t1;
  t0 = performance.now();
  const matrix = createMatrix();
  appendBinariesToBackground(matrix);
  t1 = performance.now();
  console.log(`Execution time: ${t1 - t0}ms`);
});

// $(document).ready(() => {
//   generateBinary();
//   setInterval(updateBinary, 5);
//   function generateBinary() {
//     let str = '';
//     for (var i = 0; i < 3500; i++) {
//       if (i % 100 === 0) {
//         str += '\n';
//       } else {
//         str += Math.round(Math.random());
//       }
//     }
//     $('.background').html(str);
//     console.log('Background width: ', $('.background').width());
//   }
//   function updateBinary() {
//     let str = $('.background').html();
//     let n = str.length;
//     const idx = () => {
//       let r = Math.floor(Math.random() * n + 1);
//       if (r % 100 === 0) return idx();
//       else return r;
//     };

//     $('.background').html(
//       str.substring(0, idx()) +
//         Math.floor(Math.random()) +
//         str.substring(idx() + 1)
//     );
//   }
// });
