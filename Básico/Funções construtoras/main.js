//Notação de Classe (ES6):
//Notação de POO com o método Get e Set;

//Usamos o método de encapsulamento, criando variáveis dentro de um escopo da função.

//Observação: Funções também são estruturas de dados.


let Carro = function(){
	this.cor = "Amarelo";
	this.modelo = "Ferrari";
	this.velocidadeAtual = 0;

	var velocidadeMaxima = 60; //Seria uma forma "privada"
	//this.velocidadeMaxima = 60; // Assim ele está "público."
	var quilometrosRodados = 0;

	this.acelerar = function(){
		if (this.getVelocidadeAtual() >= /*this.*/velocidadeMaxima) {
			console.log("Você está em uma velocidade muito alta, tenha cuidado.");
			console.log("Não pode aumentar mais do que isso.")
		} else if (this.getVelocidadeAtual() < /*this.*/velocidadeMaxima){
			this.setVelocidadeAtual(this.getVelocidadeAtual() + 15);
		}
		setQuilometrosRodados();
		//console.log(quilometrosRodados)
	}

	this.getVelocidadeAtual = function(){
		return this.velocidadeAtual;
	}

	this.setVelocidadeAtual = function(velocidade){
		this.velocidadeAtual = velocidade;
	}

	var setQuilometrosRodados = function(){ //Só funciona na função, 'encapsulamos' a função
		quilometrosRodados += 0.5;
		console.log(quilometrosRodados);
	}
}

let carro = new Carro();

carro.velocidadeMaxima = 200; //Já não influência mais o código.
carro.acelerar();  //15
carro.acelerar();  //30
carro.acelerar();  //45
carro.acelerar();  //60
carro.acelerar();  //75 - Já não aumenta mais.
console.log(carro.velocidadeMaxima);

console.log(carro.getVelocidadeAtual());;
