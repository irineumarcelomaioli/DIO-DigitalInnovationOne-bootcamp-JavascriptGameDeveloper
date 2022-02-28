const myNumber = 12.4032;

// Transforma numero para string
const numberAsString = myNumber.toString();
console.log(`Número transformado em string: ${numberAsString} ${typeof numberAsString}`);

// Retorna o número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2)
console.log(`\nNúmero com duas casas decimais: ${fixedTwoDecimals}`);

// Transforma uma string em float
console.log(`\nString parseada para float: ${parseFloat(numberAsString)}`);

// Transforma uma string em int
console.log(`\nString parseada para int: ${parseInt(numberAsString)}`)