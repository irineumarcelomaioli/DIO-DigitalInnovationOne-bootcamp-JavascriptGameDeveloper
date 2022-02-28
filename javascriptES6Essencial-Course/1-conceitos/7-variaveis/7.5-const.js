const name = 'Irineu';

// Não podemos alterar o valor
//name = 'Marcelo';

console.log(name);

const user = {
  name: 'Maioli'
};

// Mas se for um objeto, podemos trocar suas propriedades
user.name = 'outro nome';

// Não podemos fazer o objeto "apontar" para outro lugar
// user = {
//   name: 'Irineu'
// }

console.log(user);

const persons = ['irineu', 'marcelo', 'maioli'];

// Podemos adicionar novos itens
persons.push('Dev');

// Podemos remover algum item
persons.shift();

// Podemos alterar diretamento
persons[1] = 'Huguinho';

console.log('\nArray após as alterações: ', persons);