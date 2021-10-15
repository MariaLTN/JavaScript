//Propriedades, Objetos e Métodos.


//Funções Nativas para manipular strings

document.write("<h5>Strings</h5>")
var Nome = 'Felipe Drugovich';

document.write(`O nome "${Nome}" possui ${Nome.length} caracteres, contando com o espaço.<br>`);
document.write(`Na 7º posição temos a letra ${Nome.charAt(7)} usando o "charAt(7)", usando o Nome[7] temos: ${Nome[7]}<hr>`)

//Funções Nativas para tarefas matemáticas

document.write("<h5>Números</h5>")
var x = 15.963;

document.write('Arredondamento do número '+x+' para CIMA se daria com o "Math.ceil(x)" retornando ' + Math.ceil(x) + '<br>');
document.write('Arredondamento do número '+x+' para BAIXO se daria com o "Math.floor(x)" retornando ' + Math.floor(x) + '<br>'); 
document.write('Arredondamento do número '+x+' para CIMA ou BAIXO levando em consideração fatores como a fração é feito o uso do "Math.round(x)" retornando ' + Math.round(x) + '<br>'); 
document.write('A geração de um número aleatorio é feito com o uso do "Math.random()" retornando ' + Math.random() + '<hr>');


//Funções Nativas para manipular data.

document.write("<h5>Date</h5>");
var data = new Date();

document.write(`O dia de hoje é ${data.getDate()} com o metodo "getDate()" do mês ${data.getMonth()+1}, `);
document.write(`explicitamente adicionamos mais ao ao mês, porque o metodo "getMonth() conta de 0-11" do ano ${data.getFullYear()} com o metodo "getFullYear"<br>`);
document.write(`As horas são ${data.getHours()} com o metodo "${data.getHours()}" os minutos ${data.getMinutes()} com o metodo ${data.getMinutes()}`)