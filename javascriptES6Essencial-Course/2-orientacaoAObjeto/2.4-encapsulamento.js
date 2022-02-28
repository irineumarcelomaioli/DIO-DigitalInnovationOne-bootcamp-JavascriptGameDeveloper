'use strict'

function Person(initialName) {
  var name = initialName;

  Object.defineProperty(this, 'name', {
    get: function () {
      return name;
    },
    set: function (value) {
      name = value;
    }
  })
}

/** JAVASCRIPT VERSÃO 12 */
/**
 
 'use strict';
 
 class Person {
   #name = '';

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

}
   */