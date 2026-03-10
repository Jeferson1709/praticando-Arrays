// Aceessando e manipulando arrays com for

const arrNumeros = [46, 34, 23, 12];

for (let i = 0; i < arrNumeros.length; i++) {
  console.log(arrNumeros[i]);
}

for (let i = 0; i < arrNumeros.length; i++) {
  arrNumeros[i] = arrNumeros[i] * 10;
}
//[ 460 , 340 , 230 , 120 ];
console.log(arrNumeros);

const estudantes = ["JUliana", "aline", "SOLANGE"];

for (let i = 0; i < estudantes.length; i++) {
  estudantes[i] = estudantes[i].toUpperCase();
}

// ['JULIANA', 'ALINE','SOLANGE']

console.log(estudantes);

// Aceessando e manipulando arrays com for...of

const arrayNumeros = [18, 95, 45, 76, 23, 99];

for (let numero of arrayNumeros) {
  if (numero + 10 > 100 || numero > 100) continue;
  console.log(numero + 10);
}
