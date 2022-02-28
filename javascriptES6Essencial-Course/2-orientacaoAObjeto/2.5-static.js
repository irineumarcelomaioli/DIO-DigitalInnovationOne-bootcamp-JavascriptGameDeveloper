'use strict';

function Person() {}

Person.walk = function () {
  console.log('walking...');
}

console.log(Person.walk()); // "walking..."

/**------------ */

'use strict';

class Person2 {
  static walk() {
    console.log('walking...');
  }
}

console.log(Person2.walk()); // "walking..."