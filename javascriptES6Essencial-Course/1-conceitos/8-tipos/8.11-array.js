const users = ['Huguinho', 'Luizinho', 'Zezinho'];

const gender = {
  MAN: Symbol('M'),
  WOMAN: Symbol('W'),
}

const persons = [
  {
    name: 'Huguinho',
    age: 26,
    gender: gender.MAN,
  },
  {
    name: 'Luizinho',
    age: 43,
    gender: gender.MAN,
  },
  {
    name: 'Zezinho',
    age: 18,
    gender: gender.WOMAN,
  },
]

// Retorna a quantidade de itens de um array
console.log('Items: ', persons.length);

// Verifica se é um array
console.log('A variável persons é um array: ', Array.isArray(persons));

// Iterar os itens do array
persons.forEach((persons) => {
  console.log(`Nome: ${persons.name} `);
});

//Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens: ', mens);

// Retornar um novo
const personsWithCourse = persons.map(person => {
  person.course = 'Introdução ao JavaScript';
  return person;
})

console.log('\nPessoas com a adição do course: ', personsWithCourse);

// Transfoma um array em outro tipo
const totalAge = persons.reduce((age, person) => {
  age += person.age;
  return age;
}, 0);

console.log('\nSoma de idade das pessoa', totalAge);

// Juntando operações 
const totalEvenAges = persons
  .filter(person => person.age % 2 === 0)
  .reduce((age, person) => {
    age += person.age;
    return age;
  }, 0);

console.log('\nSoma de idades das pessoas que possuem idade par', totalEvenAges);