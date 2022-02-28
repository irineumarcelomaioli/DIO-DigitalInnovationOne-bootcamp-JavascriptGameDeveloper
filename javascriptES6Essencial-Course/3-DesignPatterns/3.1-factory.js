function Pessoa(propriedade) {
  return {
    name: 'Irineu Marcelo',
    lastName: 'Maioli',
    ...propriedade
  }
}

const p = Pessoa({
  name: 'I. Marcelo',
  age: 37
});
console.log(p);