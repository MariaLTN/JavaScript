//Notação de Classe (ES6):

class Produto{

	constructor(descricao,preco){
		this.descricao = descricao;
		this.preco = preco;
	}

	verDesc(){
		console.log(`O produto é: ${this.descricao} e tem o preço R$:${this.preco};`)
	}
}

let produto = new Produto("BOX de Bridgerton", 150);
produto.verDesc();

//Notação de Objeto Literal/Estático:

let produtoLiteral1 = {
	descricao: "BOX de Percy Jackson",
	preco: 139.00,
	verDesc: function(){
		console.log(`O produto é: ${this.descricao} e tem o preço R$:${this.preco};`)
	}
}

produtoLiteral1.verDesc();

//Um pouco mais enxuto:

let produtoLiteral2 = {
	descricao: "BOX de Harry Potter",
	preco: 249.00,
	verDesc() { //Mais enxuto
		console.log(`O produto é: ${this.descricao} e tem o preço R$:${this.preco};`)
	}
}

produtoLiteral2.verDesc();

document.write("<h3>Objetos Literais/Estáticos: Conceitos Básicos</h3>");

document.write("<p>Objetos Literais/Estáticos são usados porque <strong>nem sempre, existe a necessidade de criação de uma classe</strong>.</p>");
document.write("<p>Geralmente, objetos literias são objetos <strong>únicos</strong> dentro da nossa aplicação. Logo, não existindo a necessidade de criar uma coleção de objetos daquele tipo.</p>");
document.write("<p><strong>Por exemplo</strong>, é muito comum dentro das nossas aplicações termos formulários que são submetidos para um servidor.</p>");
document.write("<strong>O que fazemos?</strong> Recuperamos os dados do formulário e montamos um objeto literal. E na sequência pegamos esse objeto literal e convertemos para JSON e encaminhamos esse objeto anexado ao nosso HTTP para o servidor, que por fim armazena no servidor.</p>");
document.write("<p><strong>Poderia criar uma classe?</strong> Poderia, mas não existiria a necessidade uma classe ára <strong>um único</strong> formulário. A não ser que esse formulário, ele sirva de entrada para uma coleção de objetos, sendo assim compreensível o uso de uma classe que vai instanciar vários objetos do memso tipo.</p>");

document.write("<p><strong>Resumo:</strong> Objeto literal nada mais é que um objeto descritivo, que combina pares de nomes e valores.</p>");
document.write("Observar o código main.js e o console.");

//Para mudar de valor ou incluir um novo atributo temos:

produtoLiteral2.categoria = "Romance";			// Adicionando um novo atributo;
produtoLiteral2.descricao = "BOX de Jane Austen" //Mudando o valor do nome;
produtoLiteral2.verDesc();