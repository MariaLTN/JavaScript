document.write("<h2>Declaração de Variáveis - let/var/const</h2>");

document.write("<p><strong>let</strong> é um dos recursos do ES6 e assim como o <strong>var</strong> eles são operadores de declaração de variáveis.</p>");

document.write("<p>A sua grande diferença é que o <strong>let</strong> preserva o contexto, ou seja,  escopo da onde a variável foi criada, podendo ser: <strong>global</strong>, <strong>função</strong> ou <strong>bloco</strong>. Relembrar o documento <strong>EscopoVariaveis</strong></p>");
document.write("O <strong>const</strong> funciona de forma analoga ao let. A diferença é que o const tem a premissa de não sofrer alterações ao longo do processamento do script e que no processo de declaração ela precisa receber um valor de (forma imediata). Uma boa prática do const é nomear as variável com letra maiúscula.")
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
var Filme1 = "Amigo da Noiva";
console.log(`[var] Inicialmente temos: ${Filme1} <br>`);
{
	var Filme1 = "Meninas Malvadas";
	console.log(`[var] Dentro do bloco: ${Filme1} <br>`);
}

console.log(`[var] Fora do bloco, depois de passar pelo bloco, o var Filme contém o resultado: ${Filme1} <br>`);

//Let 
let Filme2 = "Resgate do Soldado Ryan";
console.log(`[let] Inicialmente temos: ${Filme2} <br>`);

{
	let Filme2 = "Homem Aranha";
	console.log(`[let] Dentro do bloco: ${Filme2} <br>`);
}

console.log(`[let] Fora do bloco, depois de passar pelo bloco, o let Filme contém o resultado: ${Filme2} <br>`);

//Const
const FILME3 = "O único";

{
	const FILME3 = "Não tão único";
}

console.log("O FILME3 é: " + FILME3);
//Saíra "O único", pois segundo a semelhança com o let, o que está dentro da função é apenas dela, logo a possível alteração do nome do FILME3 não será possível.
//Mesmo passando pelo bloco;

