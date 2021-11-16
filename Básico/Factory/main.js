document.write(`<p>Através do padrão de projeto Factory nós podemos implementar uma "fábrica" para criação dos nossos objetos em tempo de execução.</p>`);
document.write(`<p>As funções Factory combinam: as <strong>chamadas de funções com o retorno de objetos literais</strong>.</p>`);
document.write(`<p>Funções Factory, servem para a criação de objetos de forma dinâmicas. </p>`);
document.write(`<p><strong>Em resumo:</strong> É encapsular o processo de criação do objeto e retornar o objeto pronto.</p>`);

document.write(`BibicletaFactory()`);
document.write(`<br>{<br>cor, marcha, aro, pedalar() {LÓGICA} <br>}.`);

//document.write(`<p> .</p>`);
//document.write(`<p> .</p>`);


let Bicicleta1 = {
	cor: "Borgonha",
	marcha: "Única",
	aro: 18,
	pedalar() {
		console.log(`Método pedalar feito.`);
	}
}

let Bicicleta2 = {
	cor: "Preto",
	marcha: "Dupla",
	aro: 26,
	pedalar() {
		console.log(`Método pedalar feito.`);
	}
}

console.log(Bicicleta1);
console.log(Bicicleta2);
//A repetição sendo feita.

let Bibicleta_QuaseFactory = function() {
	//Poderia ter toda uma lógica, esse é um exemplo simples.
	return {
		cor: "Branca",
		marcha: "Única",
		aro: 12,
		pedalar() {console.log(`Método pedalar feito. (Factory)`);}
	}
}


let Bicicleta3 = Bibicleta_QuaseFactory();
Bicicleta3.cor = "Azul" 
console.log(Bicicleta3);

//Até agora, as coisas continuam literal. Para melhorar isso temos: Os parâmetros.

let BibicletaFactory = function(cor, marcha, aro) {
	// Poderia ter toda uma lógica, esse é um exemplo simples.
	// Requisição HTTP
	// RespostA HTTP
	return {
		cor: cor,
		marcha: marcha,
		aro: aro,
		pedalar() {console.log(`Método pedalar feito. (Factory)`);}
	}
}

let Bicicleta4  = BibicletaFactory("Vermelha", "Única", 15);
console.log(Bicicleta4);