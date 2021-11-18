document.write(`<h3>Object Prototype</h3>`);
document.write(`<p>Todos os objetos em JavaScript descendem de Object.</p>`);
document.write(`<p>Prototype nada mais é que um primeiro modelo (ou padrão) para a criação de alguma coisa.</p>`);
document.write(`<p>Ocorre um herança de modo implícito.</p>`);

// Objeto Literal
let aviao1 = {
	cor: "Branco",
	modelo: "Boeing 730",
	levantarVoo: function() {console.log("Levantando voo.")}
}

// Função Construtora
let AviaoConstrutora = function(){
	this.cor = "Azul",
	this.modelo = "Boeing 787",
	this.levantarVoo = function() {console.log("Levantando voo.")}
}

let aviao2 = new AviaoConstrutora();

// Classe 
class AviaoClass {
	constructor(){
		this.cor = "Vermelho",
		this.modelo = "Boeing 650"		 
	}
	
	levantarVoo() {
		console.log("Levantando voo.")
	}
}

let aviao3 = new AviaoClass();

console.log(aviao1)
console.log(aviao2)
console.log(aviao3)

document.write(`<p>Mostando que independente da forma que escolhemos de instanciação, todos são "filhos" de prototype.</p>`);
document.write(`<p>Olhar no console.</p>`);
document.write(`<p>Apesar de um prototype ser uma função e não propriamente um objeto, por isso todos os seus "filhos" são considerados também funções.</p>`);

//document.write(`<p> .</p>`);
//document.write(`<p> .</p>`);
