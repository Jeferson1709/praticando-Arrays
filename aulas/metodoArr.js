const arrNumeros = [12, 23, 34, 45, 56];

arrNumeros.push(67);
console.log(arrNumeros);

arrNumeros.pop();
console.log(arrNumeros);

const elem = arrNumeros.indexOf(12);
console.log(elem);

const novoArr = arrNumeros.splice(2);
console.log(novoArr);

// Métodos de array - CallBack

const arrCalculado = arrNumeros.map((num) => {
  return num * 10;
});

console.log(arrCalculado);

arrNumeros.forEach((num, i) => {
  console.log(`o número ${num} está no índice ${i}`);
});

const arrFiltrado = arrNumeros.filter((num) => num % 5 === 0);

console.log(arrFiltrado);
