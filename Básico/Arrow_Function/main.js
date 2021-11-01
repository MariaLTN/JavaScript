document.write("<h2>Funções - Arrow Function</h2>");

//document.write("<p><strong>let</strong> é um dos recursos do ES6 e assim como o <strong>var</strong> eles são operadores de declaração de variáveis.</p>");

document.write('<p>Uma outra feacture do ES6 é a <strong>Arrow Function</strong> que é uma forma mais enxuta de escrita de funções anônimas.</p>');

/*Forma anônima convencional*/
let square_convencional = function(x=0){
	return x*x;
}

document.write('<p><strong>Exemplo</strong>: Forma anônima convencional:</p>');

document.write(`<p>let square_convencional = function(x) {return x*x};<br>Que se chamarmos square(3) temos: ${square_convencional(3)}</p>`);

/*Forma anônima com arrow*/
let square_arrow = (x=0) => {
	return x*x
}

document.write('<p><strong>Exemplo</strong>: Forma anônima com arrow:</p>');

document.write(`<p>let square_arrow = (x=0) => {return x*x;><br> Resultaria também em ${square_arrow(3)}.</p>`);

document.write(`<p><strong>Detalhes: </strong>Se estivermos recebendo um único parâmetro podemos omitir o (). Mas caso recebessemos mais parâmetro funcao(X,Y) ou então não recebessemos nenhum parâmetro funcao(), precisariamos precisariamos dos () .</p>`);
document.write(`<p><strong>Outro detalhes: </strong> Quando temos apenas uma instrução de retorno, ou seja, não temos um bloco de lógica. Não será preciso usar abre e fecha as chaves e o return, apenas a instrução que queremos retornar.</p>`);
document.write(`<p>Assim a função "square_arrow" poderia ser reescrita assim: "let square_arrow = x => x*x;".</p>`);


let impar_par = (num=0) => num%2 == 0? "par" : "impar";

document.write(`<p>Com outro <strong>exemplo</strong>, em condição ternária temos: let impar_par = (num=0) => num%2 == 0? "par" : "impar";.</p>`);
document.write(`<p> O número 5 é ${impar_par(5)}, o número 164 é ${impar_par(164)}, o número 99 é ${impar_par(99)}... .</p>`);

// document.write(`<p> .</p>`);
// document.write(`<p> .</p>`);