document.write("<h2>BOM - Browser Object Model</h2>");

document.write("<strong>Observação: Olhar a documentação para mais informações e comandos.</strong><hr>");

/**************** WINDOWNS ****************/
document.write("<h3>Window</h3>");

document.write("<p>Em relação ao DOM com o BOM estamos subindo o nível. Agora é sobre um objeto que permite além da nevageção até os elementos HTML, ele também se comunidca com os recursos do browser.</p>");
document.write("<p>Como por exemplo, o 'alert'. Que funciona se seguinte maneira: Através do API do BOM estamos encaminahndo vi 'alert' uma mensagem que será apresentada para o usuário através de um recurso do browser.</p>");
document.write("<p><strong>DOM:</strong> Nós olhamos os elementos da nossa página que enquanto com o <strong>BOM</strong>: Podemos interagir com os recursos do browser.</p>");

/*Lógicas das Funções*/
var Site;

function Abrir(){
	/*Open(URL, nome[opcional], especificações, replace[opcional])*/
	/*Pode ser uma referencia (URL) interna da página da WEB, script interno ou link externo.*/
	Site = window.open("https://www.tottenhamhotspur.com/", "Tottão", "width=500, height=500");
}

function Fechar(){
	Site.close();
}

function Imprimir(){
	window.print();
}


/*Botões*/
document.write("<button onclick='Abrir()'>Abrir PopUp</button>");
document.write("<button onclick='Fechar()'>Fechar PopUp</button>");
document.write("<button onclick='Imprimir()'>Imprimir</button><hr>");


/**************** SCREEN ****************/
document.write("<h3>Screen</h3>");

document.write("<p>O objeto screen nos fornece acesso aos atributos relativos à tela do browser através. Podemos por exemplo, ter acesso a informações de largura e altura da parte interna do navegador.");
document.write(" Nós podemos ter também essa mesma informação considerando a barra de ferramentas e a barra de status (além de outros atributos que podem ser recuperados.).</p>");

document.write("<p>var Altura = window.screen.availHeight;<br>var Largura = window.screen.availWidth;</p>");

var Alturabrowser = window.screen.availHeight;
var Largurabrowser = window.screen.availWidth;

document.write(`<p>A altura do browser é ${Alturabrowser}px e a largura do browser é ${Largurabrowser}px. Isso não refletem a altura e largura que o browser está usando no momento.</p><hr>`);


/**************** LOCATION ****************/
document.write("<h3>Location</h3>");

document.write("<p>O objeto location fornece acesso a tributos e métodos da URL atual, ou seja, o path de onde estamos no momento.</p>");
document.write("<p>Nós podemos forçar o redirecionamento, afetando a URL da aplicação ou mesmo podemos atualizar a página a partir do método reload.</p>");

function Redirecionamento(){
	window.location.href="https://tottenhamhotspur.com/";
}

document.write("<button onclick='Redirecionamento()'>Clique :)</button>");
document.write("<p>Ao clicar no botão acima, estamos sendo redirecionados. Porque o método a baixo foi acionado.</p>");

document.write("<p>window.location.href='https://tottenhamhotspur.com/';<hr>");


/**************** TIMING ****************/
document.write("<h3>Timing</h3>");

document.write("<p>O 'setTimeout('acao', 'tempo em ms')' e 'setInterval('acao', 'tempo em ms')' são dois métodos especificos do objeto 'Window'. Esses métodos permitem com base na definição de um intervalo de tempo executar uma açãod e forma programada.</p>");
document.write("<p>O primeiro executa uma ação uma vez após o tempo informado. O segundo executa sempre(constante) após o intervalo informado .</p>");

// setTimeout(function() {
// 	document.write('Teste :)<br>');
// }, 2000);

document.write("<p>setTimeout(function() {document.write('Teste :));}, 2000). 2000milisegundos = 2 Segundos</p>");
document.write("<p>Após 2 segundos o resultado: 'Teste :)' apareceu e uma única vez.</p>");

// var contador = 5;
// var funcao = setInterval(function() {
// 	document.write(contador + '<br>');
// 	contador--;
// 	if (contador==0){clearInterval(funcao);}
// }, 2000);

document.write("<p>setInterval(function() {document.write('Teste :));}, 2000).</p>");
document.write("<p>Após 2 segundos o primeiro 'Teste :)' aparece e continua a aparecer a cada 2 segundos. Até um comando o fazer parar..</p>");

document.write("<p>Os comandos podem ser parados com o comando 'clearTimeout();' e 'clearInterval();' Passando por referencia a função a ser 'limpada'.</p>");
document.write("<p>Exemplo:</p>");
document.write("<p>var contador=5;<br>var funcao = setInterval(function() {<br>document.write(contador + 'br');<br>contador--;<br>if (contador==0){clearInterval(funcao);}<br>}, 2000);<br></p>");

document.write("<p>Ele faria uma contagem regressiva de 5 até 0, quando chegasse no 0 ele encerraria a contagem.</p><hr>");

// document.write("<p> .</p>");
