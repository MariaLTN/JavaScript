//DOM

function Decisao(){
	var ValorDigitado = document.getElementById('Key').value;

	//Limpar o campo de digitação;
	document.getElementById('Key').value = '';

	//Limpar espaços em branco nas extremidades da string:
	ValorDigitado.trim();

	switch(ValorDigitado) {
		case '0': 
		case '1': 
		case '2': 
		case '3': 
		case '4': 
		case '5': 
		case '6': 
		case '7': 
		case '8': 
		case '9': 
			document.getElementById('Numeros').value = ValorDigitado;
			break;
		default: 
			document.getElementById('Letras').value = ValorDigitado;
	}
	//Para concatenar os valores em 'Numeros' e 'Letras' basta colocar o '+='' no lugar o '='
}

function Cor_Fundo(Cor){
	var Square = document.getElementById('Square');
	Square.style.background = Cor;
}
