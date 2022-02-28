// Variável
const text = 'Texto';
console.log(text);

// Retorna o tamanho de uma string
const textSize = text.length;
console.log(`Quantidade de letras: ${textSize}`);

// Retorna um array quebrando a string por um delimitador
const splittedText = text.split('x');
console.log(`\nArray com as posições serpadas pelo delimitador: ${splittedText}`);

// Busca por um valor e substitui por outro
const replacedText = text.replace('Text', 'txeT');
console.log(`\nSubstituição de valor: ${replacedText}`);

// Retorna a "fatia" de um valor 
const lastChar = text.slice(-1);
console.log(`\nÚltima letra de uma string: ${lastChar}`);

const allWithoutLastChar = text.slice(0, -1);
console.log(`\nValor da string da primeira letra menos a última: ${allWithoutLastChar}`);

const secondToEnd = text.slice(1);
console.log(`\nValor da string da segunda letra até última: ${secondToEnd}`);

// Retorna N caracteres a partir de uma posição
const twoCharsBeforeFirstPos = text.substr(0, 2);
console.log(`\nAs duas letras primeiras são: ${twoCharsBeforeFirstPos}`);








