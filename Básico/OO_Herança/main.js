//Modelo do Objeto

class Animal{
	constructor (cor="Indefinido", tamanho="Indefinido"){
		this.cor = cor;
		this.tamanho = tamanho;
	}

	dormir(){
		return "O animal está dormindo!";
	}
}

class Cachorro extends Animal{
	constructor (){
		super();
		this.orelhas = '';
	}

	correr(){
		return "O animal está correndo!";
	}

	rosnar(){
		return "O animal está rosnando!";
	}

}

class Passaro extends Animal{
	constructor (bico="Indefinido", cor="Indefinido", tamanho="Indefinido"){	
		super(cor, tamanho);	
		this.bico = bico;
	}

	voar(){
		return "O animal está voando!";
	}
}

class Papagaio extends Passaro{
	constructor (bico, sabeFalar="Indefinido", cor, tamanho){
		super(bico, cor, tamanho);		 //Encaminhando o tamanho do bico para classe Passaro.
		this.sabeFalar = sabeFalar;
	}

	Falar(){
		return this.sabeFalar;
	}
}

let papagaio0 = new Papagaio();
let papagaio1 = new Papagaio("Medio","Sabe falar", "Verde", 25);
let papagaio2 = new Papagaio("Pequeno","Não sabe falar", "Branco", 10);

console.log(papagaio0);
console.log(papagaio1);
console.log(papagaio2);

//O operador super(), precisa ficar antes de qualquer outro operador com 'this.'