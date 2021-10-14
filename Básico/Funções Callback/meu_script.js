
//Funções Anônimas:
function exibirDados(controle, id, CallbackSucesso, CallbackErro) {
	//Lógica a ser atendida.
	if (controle) {
		 CallbackSucesso('Amor',id,'Livro de Crônicas sobre Amor');
	} else {
		CallbackErro('MDS um ERRO!');
	}
}


//Técnica de Wrapper:
var CallbackSucesso = function(titulo,id,descricao) {
	document.write(`O nome do livro é ${titulo} de ID: ${id} a descricao é '${descricao}'.<br>`);
}

var CallbackErro = function(erro) {
	document.write(`Teve um ${erro} inesperado!!<br>`);
}

exibirDados(1, 151413, CallbackSucesso, CallbackErro);
exibirDados(0, 151413, CallbackSucesso, CallbackErro);