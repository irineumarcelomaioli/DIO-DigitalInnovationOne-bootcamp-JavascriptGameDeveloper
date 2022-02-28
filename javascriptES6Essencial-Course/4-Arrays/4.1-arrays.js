// Array.of()
const persons = Array.of('Jonh', 'Cris', 'Jenny');

console.log(persons);

const numbersAndStrings = Array.of(1, 2, 'string', 'text');

console.log(numbersAndStrings);

//Array
const arrayWith3Position = Array(3);
console.log(arrayWith3Position);

const personsList = Array('Jonh', 'Cris', 'Jenny');
console.log(personsList);

// Array.from
const divs = document.querySelectorAll('div');
const divArray = Array.from(divs);

//array push
const frutasPush = ['melancia', 'banana'];
console.log(frutasPush);
console.log(frutasPush.push('laranja'));
console.log(frutasPush);

//array pop
const frutasPop = ['melão', 'acerola', 'abacate'];
console.log(frutasPop);
console.log(frutasPop.pop());
console.log(frutasPop);

//array unshift
const frutasUnshift = ['melão', 'acerola', 'abacate'];
console.log(frutasUnshift);
console.log(frutasUnshift.unshift('banana'));
console.log(frutasUnshift);

//array shift
const frutasShift = ['melão', 'acerola', 'abacate'];
console.log(frutasShift);
console.log(frutasShift.shift());
console.log(frutasShift);

//array concat
const frutasConcat = ['melão', 'acerola', 'abacate'];
const salgadosConcat = ['pastel', 'coxinha', 'kibe', 'empada'];
const alimentosConcat = frutasConcat.concat(salgadosConcat);
console.log(alimentosConcat);
console.log(frutasConcat);
console.log(salgadosConcat);

// array slice
const frutasSlice = ['laranja', 'banana', 'melancia', 'abacate', 'mamão', 'acerola', 'melão'];
console.log(frutasSlice.slice(0, 2));
console.log(frutasSlice.slice(2));
console.log(frutasSlice.slice(-1));
console.log(frutasSlice.slice(-3));

// array splice
const frutasSplice = ['laranja', 'banana', 'melancia', 'abacate', 'mamão', 'acerola', 'melão'];
console.log(frutasSplice);
frutasSplice.splice(1, 0, 'kiwi')
console.log(frutasSplice);
frutasSplice.splice(2, 1, 'pitaya', 'goiaba')
console.log(frutasSplice);

// array forEach
const frutasForEach = ['laranja', 'banana', 'melancia', 'abacate', 'mamão', 'acerola', 'melão'];
frutasForEach.forEach((value, index, arr) => {
  console.log(`${index} - ${value} / ${arr}`);
})

// array map
const frutasMap = ['laranja', 'banana', 'melancia', 'abacate', 'mamão', 'acerola', 'melão'];
frutasMap.map((value, index) => {
  console.log(`${index} - ${value}`);
})
console.log(frutasMap);

// array flat
const frutasFlat = ['laranja', ['banana', 'melancia', ['abacate']],
  ['mamão', 'acerola'], 'melão'
];
console.log(frutasFlat.flat());
console.log(frutasFlat.flat(2));

// array flatMap
const arrayFlatMap = [1, 2, 3, 4, 5];
console.log(arrayFlatMap.flatMap(value => [value * 2]));
console.log(arrayFlatMap.flatMap(value => [
  [value * 2]
]));

// array keys
const arrayKeys = [1, 2, 3, 4, 5];
const arrayKeysInterator = arrayKeys.keys();
console.log(arrayKeysInterator.next());
console.log(arrayKeysInterator.next());
console.log(arrayKeysInterator.next());
console.log(arrayKeysInterator.next());
console.log(arrayKeysInterator.next());
console.log(arrayKeysInterator.next());

// array values
const arrayValues = [1, 2, 3, 4, 5];
const arrayValuesInterator = arrayValues.values();
console.log(arrayValuesInterator.next());
console.log(arrayValuesInterator.next());
console.log(arrayValuesInterator.next());
console.log(arrayValuesInterator.next());
console.log(arrayValuesInterator.next());
console.log(arrayValuesInterator.next());

// array entries
const arrayEntries = [1, 2, 3, 4, 5];
const arrayEntriesInterator = arrayEntries.entries();
console.log(arrayEntriesInterator.next());
console.log(arrayEntriesInterator.next());
console.log(arrayEntriesInterator.next());
console.log(arrayEntriesInterator.next());
console.log(arrayEntriesInterator.next());
console.log(arrayEntriesInterator.next());

// array find
const arrayFind = [1, 2, 3, 4, 5];
const firstGreaterThanTwo = arrayFind.find(value => value > 2);
console.log(firstGreaterThanTwo);

// array findIndex
const arrayFindIndex = [1, 2, 3, 4, 5];
const firstGreaterThanTwoIndex = arrayFindIndex.findIndex(value => value > 2);
console.log(firstGreaterThanTwoIndex);

// array Filter
const arrayFilter = [1, 2, 3, 4, 5];
const allValuesGreaterThanTwo = arrayFilter.filter(value => value > 2);
console.log(allValuesGreaterThanTwo);

// array IndexOf
const arrayIndexOf = [1, 3, 3, 4, 3];
const firstIndexOfItem = arrayIndexOf.indexOf(3);
console.log(firstIndexOfItem);

// array LastIndexOf
const arrayLastIndexOf = [1, 3, 3, 4, 3];
const lastIndexOfItem = arrayLastIndexOf.lastIndexOf(3);
console.log(lastIndexOfItem);

// array Include
const arrayInclude = [1, 3, 3, 4, 3];
console.log(arrayInclude.includes(4));
console.log(arrayInclude.includes(2));

// array some
const arraySome = [1, 3, 3, 4, 3];
const hasSomeEvenNumber = arraySome.some(value => value % 2 === 0);
console.log(hasSomeEvenNumber);

// array every
const arrayEvery = [1, 3, 3, 4, 3];
const allEvenNumber = arrayEvery.every(value => value % 2 === 0);
console.log(allEvenNumber);

// array sort
const arraySort = [2, 5, 1, 3, 3, 4, 3];
const sortNumber = arraySort.sort((current, next) => current - next);
console.log(sortNumber);

const arraySortGrade = [{
  name: 'Peter',
  grade: 7
}, {
  name: 'Jenny',
  grade: 8
}, {
  name: 'John',
  grade: 4
}, {
  name: 'Jimmy',
  grade: 5
}, ];

const passedTheYearUp = arraySortGrade.sort((current, next) => current.grade - next.grade);
console.log(passedTheYearUp);
const passedTheYearDown = arraySortGrade.sort((current, next) => next.grade - current.grade);
console.log(passedTheYearDown);

// array reverse
const arrayReverse = [1, 2, 3, 4, 5];
console.log(arrayReverse.reverse());

// array join
const arrayJoin = [1, 2, 3, 4, 5];
console.log(arrayJoin.join('-'));

// array reduce
const arrayReduce = [1, 2, 3, 4, 5];
console.log(arrayReduce.reduce((total, value) => total += value, 0));