// in
something in somethingItems

// Array
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");

0 in arvores; // Retorna true
3 in arvores; // Retorna true
6 in arvores; // Retorna false
"cedro" in arvores; // Retorna false (você deve especificar o número do índice, não o valor naquele índice)
"lenght" in arvores; // Retorna true (lenght é um propriedade de Array)

// Objetos predefinidos
"PI" in Math; // Retorna true;
var minhaString = new String("coral");
"length" in minhaString; // retorna true

// Objetos personalizados
var meucarro = { marca: "Honda", modelo: "Accord", ano: 1998 };
"marca" in meucarro // retorna true
"modelo" in meucarro // retorna true

// instaceof 
objeto instanceof tipoObjeto

var dia = new Date(2018, 12, 17);

if (dia instanceof Date) {
  // code here
}
