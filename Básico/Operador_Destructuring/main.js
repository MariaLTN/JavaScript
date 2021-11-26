document.write(`<h3>Operador Destructuring</h3>`);
document.write(`Um operador de desestruturação, ele tira valores de dentro de uma estrutura. Essa estrutura pode ser um array ou um objeto.`);


///////////////// PARTE 01

///////////////// Contexto Array:
document.write(`<h4>Contexto Array</h4>`);
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

///////////////// PARTE 02
document.write(`<h4>Contexto Objetos</h4>`);

///////////////// Contexto Objetos:
let Produto = {
    nome: "Notebook",
    preco: 2500,
    detalhes: {
        fabricante: "ABC",
        modelo: "XYZ"
    }
    // Com "detalhes" temos atributos de objetos a tributos de outros objetos.
    // Nada mais que uma COMPOSIÇÃO: (Sendo esse um TEM UM) também existe o "É UM"
}
document.write(`<p>let Produto = {<br> nome: "Notebook",<br>preco: 2500,<br> detalhes:<br>fabricante: "ABC",<br>modelo:"XYZ"<BR>}</p>`)


// Extrair do objeto "nome" e "preco"
//  Obs.: Cuidado para não confundir com a iniciação de um objeto literal.
let {nome, preco} = Produto
console.log(nome, preco)
document.write(`<p>let {nome, preco} = Produto  --> Notebook 2500 </p>`)

// O TOKEN do descructuring varia, com o ARRAY tivemos o [] e agora temos o {}.

// Mudar nomes de variáveis:
let {nome: n, preco: p} = Produto
console.log(n, p)
document.write(`<p>let {nome: n, preco: p} = Produto  --> Notebook 2500 </p>`)

// Quando um atributo não existe no escope previsto ele retorna "Undefined"
let {nome: nn, preco: pp, desconto} = Produto
console.log(nn, pp, desconto)
document.write(`<p>let {nome: n, preco: p, desconto} = Produto  --> Notebook 2500 undefined</p>`)


// Podemos ainda usar valores default (semelhante ao que foi feito em Arrays):
let {nome: nome1, preco: preco1, desconto1="Não foi dado desconto"} = Produto
console.log(nome1, preco1, desconto1)
document.write(`<p>let {nome: nome1, preco: preco1, deconto1="Não foi dado desconto"} = Produto  --> Notebook 2500 "Não foi dado desconto"</p>`)

// Podemos ainda extrair dados de objetos pertencente a outros objetos (Dados dentro do "detalhes"):
let {detalhes: {fabricante, modelo}} = Produto
console.log(fabricante, modelo)
document.write(`<p>let {detalhes: {fabricante, modelo}} = Produto --> ABC XYZ</p>`)

// Os mesmos comportamentos a cima de: mudar o nome da variável, colocar dados default e outros servem para estes dados também;


/*document.write(`<p>.</p>`)
document.write(`<p>.</p>`)

document.write(`<p>.</p>`)
document.write(`<p>.</p>`)
document.write(`<p>.</p>`)
document.write(`<p>.</p>`)
document.write(`<p>.</p>`)
*/
