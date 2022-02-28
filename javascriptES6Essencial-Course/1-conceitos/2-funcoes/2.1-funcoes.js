function getName() {
  return 'Maioli';
}

function logFn(fn) {
  console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);