//Escopo de Variáveis:

//GLOBAL:
var GLOBAL = 10;

//BLOCO:
if (true){
	var BLOCO = 'SERIES';
	document.write('Conteúdo do BLOCO DENTRO do BLOCO é: ' + BLOCO + '.<br>');
}

document.write('Conteúdo do GLOBAL é: ' + GLOBAL + '.<br>');
document.write('Conteúdo do BLOCO FORA do BLOCO é: ' + BLOCO + '.<br>');

//FUNÇÃO:
document.write('Conteúdo do RESULTADO CHAMANDO a função é: ' + soma(5,5) + '.<br>');
function soma (a,b) {
	var RESULTADO = a*b;
	document.write('Conteúdo do RESULTADO DENTRO da função é: ' + RESULTADO + '.<br>');
	document.write('Conteúdo do BLOCO FORA do BLOCO (DENTRO da FUNÇÃO) é: ' + BLOCO + '.<br>');
	return RESULTADO;
}

document.write('<br>O que acontece é uma ELEVAÇÃO. Todos tem acesso ao ESCOPO DA GLOBAL, e por ELEVAÇÃO (todos) tem acesso ao do ESCOPO DO BLOCO, se ele estiver no campo GLOBAL. Caso esteja dentro de uma função ele é elevado, mas para dentro da função (logo so acessível a ele), mas o que está no ESCOPO DA FUNÇÃO, apenas a FUNÇÃO tem acesso.<br> ')