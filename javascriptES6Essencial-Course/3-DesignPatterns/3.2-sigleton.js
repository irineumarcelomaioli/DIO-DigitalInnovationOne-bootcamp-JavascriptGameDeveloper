function Pessoa() {
  if (!Pessoa.instance) {
    Pessoa.instance = this;
  }
  return Pessoa.instance;
}

const p = Pessoa.call({
  name: 'Irineu'
});
const p2 = Pessoa.call({
  name: 'Marcelo'
});

console.log(p);
console.log(p2);