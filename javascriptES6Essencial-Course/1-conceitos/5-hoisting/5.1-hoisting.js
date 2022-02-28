function fn() {
  console.log(text);

  var text = 'exemplo';

  console.log(text);
}

fn();

function fn2() {

  log('Teste Hoisting!')
  
  function log(value) {
    console.log(value);
  }
  
  log('Teste Hoisting da função')
}

fn2();