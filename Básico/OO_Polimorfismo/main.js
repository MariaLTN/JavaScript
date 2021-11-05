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

class Avestruz extends Passaro{
	constructor (){
		super();
	}

	voar(){ //O polimorfismo acontece aqui.
		return "Avestruz não voa!";
	}
}

let papagaio0 = new Papagaio();
let papagaio1 = new Papagaio("Medio","Sabe falar", "Verde", 25);
let papagaio2 = new Papagaio("Pequeno","Não sabe falar", "Branco", 10);
let avestruz = new Avestruz();

console.log(papagaio0); //Padrão
console.log(papagaio1); //Alteração 01
console.log(papagaio2); //Alteração 02
console.log(avestruz); // Polimorfismo do Avestruz no método "voar()"

console.log(papagaio2.voar());
console.log(avestruz.voar());