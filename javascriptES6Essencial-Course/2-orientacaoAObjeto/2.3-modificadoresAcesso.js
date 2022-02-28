'use strict';

function Person(initialName) {
  let name = initialName;

  this.getName = function () {
    return name;
  }

  this.setName = function (newName) {
    name = newName;
  }
}

const p = new Person('Maioli');

console.log(p); // Person {getName: f, setName: f}
console.log(p.getName()); // Maioli
console.log(p.name); // undefined
p.setName('Irineu Marcelo');
console.log(p.getName()); // Irineu Marcelo

/** MODIFICADOR DE ACESSO (# - JAVASCRIPT VERSÃO 12) */
/**

 class Person2 {
   #name = '';

  constructor(initialName) {
    this.#name = initialName;
  }

  setName(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

const p2 = new Person('Maioli');

console.log(p2); // Person {getName: f, setName: f}
console.log(p2.getName()); // Maioli
console.log(p2.name); // undefined
p2.setName('Irineu Marcelo');
console.log(p2.getName()); // Irineu Marcelo
*/