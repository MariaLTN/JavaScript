document.write("<h2>Declaração de Variáveis - let/var</h2>");

document.write("<p><strong>let</strong> é um dos recursos do ES6 e assim como o <strong>var</strong> eles são operadores de declaração de variáveis.</p>");

document.write("<p>A sua grande diferença é que o <strong>let</strong> preserva o contexto, ou seja,  escopo da onde a variável foi criada, podendo ser: <strong>global</strong>, <strong>função</strong> ou <strong>bloco</strong>. Relembrar o documento <strong>EscopoVariaveis</strong></p>");

document.write("<p><strong>Exemplo</strong>:</p>");

// if(true) {
// 	let serie_let = "Locke & Key";	
// }
// console.log(`Usando o let temos: ${serie_let}<br>`);

// if(true) {
// 	var serie_var = "Locke & Key";	
// }
// console.log(`Usando o var temos: ${serie_var}<br>`);

document.write("<p>if(true) {let serie = 'Locke & Key';}<br>console.log(serie);<br><br>Ele retorna um erro, como 'serie is not defined'.</p>");
document.write("<p>Mas, caso usassemos o 'var' a variável dentro do bloco sofreria um hosting, podendo ser acessada por fora do escopo definido.</p>");
document.write("<p>if(true) {var serie = 'Locke & Key';}<br>console.log(serie);</p><hr>");

document.write("<p><strong>Mais um Exemplo:</strong>.</p>");
document.write("<p>Observar pelo console.</p>");

//Var
var Filme1 = "AmigoDaNoiva";
console.log(`[var] Inicialmente temos: ${Filme1} <br>`);
{
	var Filme1 = "MeanGirls";
	console.log(`[var] Dentro do bloco: ${Filme1} <br>`);
}

console.log(`[var] Fora do bloco, depois de passar pelo bloco, o var Filme contém o resultado: ${Filme1} <br>`);

//Let 
let Filme2 = "ResgateDoSoldadoRyan";
console.log(`[let] Inicialmente temos: ${Filme2} <br>`);

{
	let Filme2 = "HomemAranha";
	console.log(`[let] Dentro do bloco: ${Filme2} <br>`);
}

console.log(`[let] Fora do bloco, depois de passar pelo bloco, o let Filme contém o resultado: ${Filme2} <br>`);