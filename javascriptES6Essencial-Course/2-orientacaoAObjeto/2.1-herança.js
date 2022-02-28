'use strict';

const myText = 'Hello prototype!';

myText.split(''); // <- de onde vê esse "split"?

console.log(myText.__proto__.split); // f split() {[native code]}

console.log(myText.__proto__.split === String.prototype.split); // true

console.log(myText.constructor === String); // true

/**
__proto__ -> prototype -> construtor

myText.constructor -> String
myText.__proto__ -> String.prototype
 */

function Animal() {}

console.log(Animal.constructor); // f Function(){ [native code ]}

/** EXEMPLO 01 */
function Animal2() {
  this.qtdePatas = 4;
}

const cachorro = new Animal2(); // função new cria um novo objeto prototipe

console.log(cachorro.qtdePatas); //4
console.log(cachorro.__proto__ === Animal2.prototype); // true
console.log(Animal2.__proto__ === Function.prototype); // true

/** EXEMPLO 02 */
function Animal3(qtdePatas) {
  this.qtdePatas = qtdePatas;
  this.movimentar = function () {};
}

function Cachorro(morde) {
  Animal3.call(this, 4);

  this.morde = morde;

  this.latir = function () {
    console.log('Au! au!');
  }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

console.log(pug); // Cachorro {qtdePatas: 4, morde: false}
console.log(pitbull); // Cachorro {qtdePatas: 4, morde: false}

/** EXEMPLO 02 */
function Animal4() {}
Animal4.prototype.qtdePatas = 0
Animal4.prototype.movimentar = function () {}

function Cachorro4(morde) {
  this.qtdePatas = 4;
  this.morde = morde;
}

Cachorro4.prototype = Object.create(Animal4);
Cachorro4.prototype.latir = function () {
  console.log('Au Au');
}

const pug4 = new Cachorro4(false);
const pitbull4 = new Cachorro4(true);