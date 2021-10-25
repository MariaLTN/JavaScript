//Flexibilidade dos Parametros:

function soma (a,b) {
	return a+b;
}

console.log(soma(7, 7));
console.log(soma(7, 7, 9, 15));
console.log(soma(7));
console.log(soma());

function soma_diferente (a=0,b=0) {
	return a+b;
}

console.log(soma_diferente(7));

function fatorial (n) {
	if (n==1) {
		return 1
	} else {
		return n * fatorial(n-1);
	}
}

console.log(fatorial(7)); //Resulta em 5040
console.log(fatorial(5)); //Resulta em 120
console.log(fatorial(1)); //Resulta em 1

function soma_sem_param () {
	var resultado = 0;
	for(var i in arguments) {
		resultado += arguments[i];
	}
	return resultado;
}

console.log(fatorial(7,-1,0.5)); //Resulta em 6.5
console.log(fatorial(7,-1,0.5,"Amanda")); //Resulta em 6.5Amanda
console.log(fatorial(7)); //Resulta em 7
console.log(fatorial()); //Resulta em 0
