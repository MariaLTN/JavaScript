//Flexibilidade dos Parametros:

function soma (a,b) {
	return a+b;
}

function soma_diferente (a=0,b=0) {
	return a+b;
}

console.log(soma(7, 7));
console.log(soma(7, 7, 9, 15));
console.log(soma(7));
console.log(soma());

console.log(soma_diferente(7));
