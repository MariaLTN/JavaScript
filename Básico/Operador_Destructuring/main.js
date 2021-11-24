document.write(`<h3>Operador Destructuring</h3>`);
document.write(`Um operador de desestruturação, ele tira valores de dentro de uma estrutura. Essa estrutura pode ser um array ou um objeto.`);

// Contexto Array
document.write(`<p>Contexto Array</p>`);
let ArrayFrutas = ["Abacaxi", "Perâ", "Maçã"];
document.write(`<p>let ArrayFrutas = ["Abacaxi", "Perâ", "Maçã"];</p>`)

// É muito comum, atributir a uma variável o valor contido dentro de uma posição do Array. Como mostrado abaixo:
let A = ArrayFrutas[0]; // Abacaxi
document.write(`<p>let A = ArrayFrutas[0] --> Abacaxi</p>`)
console.log(A); //Até então muito comum dentro e fora do JavaScript.

// Mas caso seja necessário a retirada de valores dentro de um Array muito grande, fazer como a forma anterior seria muito verbosa.
// Assim, temos esse operador especia.

let [a, b] = ArrayFrutas;
document.write(`<p>let [a, b] = ArrayFrutas; --> Abacaxi, Perâ</p>`)
console.log(a, b);

//Pulando o indice 1 com "Perâ" temos:
let [d, ,c] = ArrayFrutas;
document.write(`<p>let [d, ,c] = ArrayFrutas; --> Abacaxi, Maça.<br>Pulando o indice 1 com Perâ</p>`)
console.log(d,c);

// Criar um valor default
let [e, f, g, h] = ArrayFrutas;
document.write(`<p>let [e, f, g, h] = ArrayFrutas; --> Abacaxi, Perâ, Maçã, undefined</p>`)
console.log(e, f, g, h);
 
// Ficando assim:
let [e1, f1, g1, h1="Banana Patovã"] = ArrayFrutas;
document.write(`<p>let [e1, f1, g1, h1="Banana Patovã"] = ArrayFrutas; --> Abacaxi, Perâ, Maçã, Banana Patovã</p>`)
console.log(e1, f1, g1, h1);

// Se eu botar um valor default para um valor que exista no Array, ele é DESCONSIDERADO: Exemplo:
let [e2, f2="Nada", g2, h2="Banana Patovã"] = ArrayFrutas;
document.write(`<p>let [e2, f2="Nada", g2, h2] = ArrayFrutas; --> Abacaxi, Perâ, Maçã, Banana Patovã</p>`)
console.log(e2, f2, g2, h2);

// Podemos extrair valores de Arrays Multidimensionais:
let Coisas = [[...ArrayFrutas],["José", "Maria"]];
console.log(Coisas)

document.write(`<p>let Coisas = [[...ArrayFrutas],["José", "Maria"]]; --><br>0: (3) ['Abacaxi', 'Perâ', 'Maçã']<br>
1: (2) ['José', 'Maria'] </p>`)

// Extrair o nome Maria: Melhor explicação no vídeo "Destructuring Parte 1"
let [,[,n2]] =  Coisas;
console.log(n2) // Maria 
 
document.write(`<p>let [,[,n2]] =  Coisas; --> Maria</p>`)

let [[,n3]] = Coisas;
console.log(n3); // Perâ

/*

document.write(`<p>.</p>`)


document.write(`<p>.</p>`)
document.write(`<p>.</p>`)
document.write(`<p>.</p>`)
document.write(`<p>.</p>`)
document.write(`<p>.</p>`)
document.write(`<p>.</p>`)
document.write(`<p>.</p>`)
*/