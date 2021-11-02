//Modelo do Objeto

class ContaBancaria {
	//agencia
	//numeroConta
	//saldo
	//limite

	constructor(){
		this.agencia = 1075;
		this.numeroConta = 1912;
		this.saldo = 1000;
		this.limite = 2000;
	}

	//Identificar as ações
	depositar (valorDeposito){
		this.saldo += valorDeposito;
	}

	sacar (valorSaque){
		this.saldo -= valorSaque;
	}

	consultarSaldo(){
		return this.saldo;
	}

}

let Conta1 = new ContaBancaria();

console.log(Conta1.consultarSaldo());
Conta1.depositar(500);
console.log(Conta1.consultarSaldo());
Conta1.sacar(100);
console.log(Conta1.consultarSaldo());