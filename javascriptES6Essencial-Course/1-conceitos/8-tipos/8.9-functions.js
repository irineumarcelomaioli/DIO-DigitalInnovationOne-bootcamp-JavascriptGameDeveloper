function fn() {
  return 'Code here';
}

const arrowFn = () => 'Code here';
const arrowFn2 = () => {
  // Mais de uma expressão
  return 'Code here';
}

// Funções também são objetos
fn.props = 'Posso criar propriedades';

console.log(fn());
console.log(fn.props);

// Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

// Receber e retornar funções
const controleFnExec = fnParam => allowed => {
  if (allowed) {
    fnParam();
  }
}

const handleFnExecution = controleFnExec(fn);

handleFnExecution(true); // Executará a função fn
handleFnExecution(); // Não executará a função fn

// ControlFnExec como função
function controlFnExec(fnParam) {
  return function (allowed) {
    if (allowed) {
      fnParam();
    }
  }
}