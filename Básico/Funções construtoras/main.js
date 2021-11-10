//Notação de Classe (ES6):
//Notação de POO com o método Get e Set;

let Carro = function(){
	this.cor = "Amarelo";
	this.modelo = "Ferrari";
	this.velocidadeAtual = 0;
	this.velocidadeMaxima = 60;

	this.acelerar = function(){
		if (this.getVelocidadeAtual() >= this.velocidadeMaxima) {
			console.log("Você está em uma velocidade muito alta, tenha cuidado.");
			console.log("Não pode aumentar mais do que isso.")
		} else if (this.getVelocidadeAtual() < this.velocidadeMaxima){
			this.setVelocidadeAtual(this.getVelocidadeAtual() + 10);
		}
	}

	this.getVelocidadeAtual = function(){
		return this.velocidadeAtual;
	}

	this.setVelocidadeAtual = function(velocidade){
		this.velocidadeAtual = velocidade;
	}
}

let carro = new Carro();

carro.acelerar();  //10
carro.acelerar();  //20
carro.acelerar();  //30
carro.acelerar();  //40
carro.acelerar();  //50
carro.acelerar();  //60
carro.acelerar();  //70 - Já não aumenta mais.

console.log(carro.getVelocidadeAtual());