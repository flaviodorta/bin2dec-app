const $ = require('jquery');

// Função auxiliar para obter o tamanho das linhas e colunas da matriz
const quantityOfMatrixElements = (matrix) => {
  const numberOfRowElements = matrix.length;

  const numberOfColumnElements = matrix[0].length;

  return [numberOfRowElements, numberOfColumnElements];
};

// Função para gerar a matriz
const createMatrixWithRandomBinaries = () => {
  const numberOfRowElements = Math.floor(window.innerHeight / 5) + 1 + 1;

  const numberOfColumnElements = Math.floor(window.innerWidth / 5) + 1 + 1;

  return [...Array(numberOfRowElements)].map(() =>
    [...Array(numberOfColumnElements)].map(() => Math.round(Math.random()))
  );
};

// Função para mutar aleatóriamente um elemento da matriz
const mutateUniqueElementInMatrix = (matrix) => {
  const [numberOfRowElements, numberOfColumnElements] =
    quantityOfMatrixElements(matrix);

  const randomRowIdx = Math.floor(Math.random() * numberOfRowElements);

  const randomColumnIdx = Math.floor(Math.random() * numberOfColumnElements);

  const randomBinary = Math.round(Math.random());

  matrix[randomRowIdx][randomColumnIdx] = randomBinary;
};

// Função para unificar todos elementos de um array numa única string
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

$(document).ready(() => {
  const matrix = createMatrixWithRandomBinaries();
  console.log(matrix);
  appendBinariesToBackground(matrix);
});

// Como criar uma função que recebe um quantidade desconhecida de funções
// que podem ter ou não argumentos
// const testPerformance = () => {
//   for (let i = 0; i < functions.length; i++) {
//     functions[i]();
//   }
//   t2 = performance.now();
// };
