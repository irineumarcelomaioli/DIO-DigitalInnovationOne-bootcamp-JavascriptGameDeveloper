const user = {
  name: 'Irineu Marcelo',
  lastName: 'Maioli',
}

// Recupera a chave do objeto 
console.log(`Propriedades do objeto user: `, Object.keys(user));

// Recupera os valores daa chaves do objeto 
console.log(`\nValores das propriedades do objeto user:`,  Object.values(user));

// Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log(`\nLista de propriedades e valores: ${Object.entries(user)} `, Object.entries(user));

// Mergear propriedades de objetos
Object.assign(user, { fullName: 'Irineu Marcelo Maioli' });

console.log(`\nAdiciona a propriedade fullName no objeto user: `, user);
console.log(`\nRetorna um novo objeto mergeando dois ou mais objetos:`, Object.assign({}, user, { age: 26 }));

//Previne todas as alterações em um objeto
const newObj = { foo: 'bar' };
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newObj após as alterações: ', newObj);

// Permite apenas a alteação de propriedades existentes em um objeto
const persons = { name: 'Irineu' };
Object.seal(persons);

persons.name = 'Irineu Marcelo Maioli';
delete persons.name;
persons.age = 37;

console.log('\nVariável persons após a alterações: ', persons);


