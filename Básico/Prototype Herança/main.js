document.write(`<h3>Prototype Herança</h3>`);
document.write(`<p>Todos os objetos em JavaScript descendem de Object.</p>`);
document.write(`<p>Prototype nada mais é que um primeiro modelo (ou padrão) para a criação de alguma coisa.</p>`);
document.write(`<p>Ocorre um herança de modo implícito.</p><hr>`);
document.write(`<p>Testes:</p>`);

// Objeto Literal
document.write(`<p>let Animal = {	attr1: 'a' }</p>`);
document.write(`<p>let Vertebrado = { attr2: 'b'}</p>`);
document.write(`<p>let Ave = {	attr3: 'c'}</p>`);

let Animal = {	attr1: 'a' }
let Vertebrado = { attr2: 'b'}
let Ave = {	attr3: 'c'}

// Ave é um vertebrado que por sua vez é um animal.

// Em um primeiro momento fizermos console.log(Ave.Attri2) dará Undefined; 
// Pois não uma relação de herança no momento.
document.write("console.log(Ave.attr2) = " + (Ave.attr2) + "<br>");

// Ajustando teriamos algo assim:

document.write(`<p><br>Ajustando teriamos algo assim:</p><br>`);

document.write(`<p>let Animal = {	attr1: 'a' }</p>`);
document.write(`<p>let Vertebrado { __proto__: Animal,  attr2: 'b'}</p>`);
document.write(`<p>let Ave = { __proto__: Vertebrado,	attr3: 'c'}</p>`);

let Animal1 = {	attr11: 'a' }
let Vertebrado1 = { __proto__: Animal1,  attr22: 'b'}
let Ave1 = { __proto__: Vertebrado1,	attr33: 'c'}

document.write("console.log(Ave.attr2) = " + (Ave1.attr22) + "<br>");
document.write("console.log(Ave.attr1) = " + (Ave1.attr11) + "<br><br>");

//Deixei separado em Ave e Ave1 para que aparecesse a diferença.

document.write("<strong>Se estivermos em um cenário com sobreposição de valores, o computador irá para o escopa mais baixo, nesse caso se Animal e Ave compartilhassem a mesma variável com valores distintos, o valor final seria o que está em Ave</strong>")
document.write("Retorna a primeria informação que ele encontrar.")