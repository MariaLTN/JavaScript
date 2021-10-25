document.write('<h3>Estruturas de Repetição</h3>');

document.write('<h4>For in:</h4>');

document.write('for (var x in Lista_Convidados) { <br> document.write("Nome do Convidado: " + Lista_Convidados[x] + "br");}')


var Lista_Convidados = ["Raisson", "João", "Mariane", "Fernanda", "Júlia", "Miguel"];

document.write('<br><br>var Lista_Convidados = ["Raisson", "João", "Mariane", "Fernanda", "Júlia", "Miguel"]; <br><br>');

for (var x in Lista_Convidados) {
	document.write('Nome do Convidado: ' + Lista_Convidados[x] + '<br>');
}

document.write('<br>O uso muito importante do "for in" é quando temos lista com índices não sequenciados. Por exemplo lista começando com o index 5, 7 e 8;')

var Lista_Frutas = Array();
Lista_Frutas[5] = "Banana";
Lista_Frutas[7] = "Uva";
Lista_Frutas[9] = "Pêra";

document.write('var Lista_Frutas = Array();<br> Lista_Frutas[5]="Banana";<br>Lista_Frutas[7]="Uva";<br>Lista_Frutas[9]="Pêra";<br><br>');
document.write('Usando o método "while" temos: A não execução do comando. (Trava)<br> ');

// var cont = 0
// while (cont<Lista_Frutas.length) {
// 	console.log('Conteúdo: ' + Lista_Frutas[cont]);
// }

document.write('<br>Usando o método "for in" temos: <br> ');

for (var x in Lista_Frutas) {
	document.write('Nome da Fruta: ' + Lista_Frutas[x] + '<br>');
}


document.write('<br>É uma forma flexivel de percorrer uma lista.<br> ');

document.write('<h4>For each:</h4>');

document.write('No JavaScript esse método é mais conhecido como uma função para os Arrays. Aguarda uma função de CallBack, ou seja, uma função que explicará como ele deve atuar em cada um dos índices do Array.<br><br> ');

var Lista_Funcionarios = ["Fernanda", "Ana", "Lucas", "Gustav", "Klaus", "Amanda"];

document.write('var Lista_Funcionarios = ["Fernanda", "Ana", "Lucas", "Gustav", "Klaus", "Amanda"]; <br><br> ');

document.write('Lista_Funcionarios.forEach(function(valor, index, array) {<br>document.write("index =" + index + "; valor=" + valor + "br"); if (valor=="Lucas") {<br>array[index] = "Novo Nome";<br>}<br>}) <br><br>');

Lista_Funcionarios.forEach(function(valor, index, array) {
	document.write("index =" + index + "; valor=" + valor + "<br>");
	if (valor=="Lucas") {
		array[index] = "Novo Nome";
	}
})

document.write('<br>');

Lista_Funcionarios.forEach(function(valor, index, array) {
	document.write("index =" + index + "; valor=" + valor + "<br>");
	if (valor=="Lucas") {
		array[index] = "Novo Nome";
	}
})

document.write('<br><strong>Outro detalhe muito comum quando estamos trabalhando com forEach() é que geralmente nós encaminhamos não a propria função CallBack como parâmetro, mas sim uma variável que contém a função de CallBack. Deixando o código mais legível.</strong><br><br>');

document.write('Exemplo:<br><br>');

document.write('var Funcao_Usada = function(valor, indice){<br>console.log(valor, index)<br>}<br><br>');

document.write('Lista_Funcionarios.forEach(Funcao_Usada); <br><br> Resultado:<br>');

var Funcao_Usada = function(valor, indice){
	document.write(indice + ' ' + valor + '<br>')
}

Lista_Funcionarios.forEach(Funcao_Usada);


document.write('<br><strong>O "forEach()" só atua sobre valores númericos (podendo ou não começar do zero), diferente do "for in".</strong><br><br>');
document.write('<br><br>');
