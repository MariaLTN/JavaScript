var data = new Date();
document.write("<br><strong>Data Atual</strong> " + data.toDateString() + "<br><br>");


//Adicionar/Remover DIAS:
document.write('<strong>Adiconando mais 2 DIAS:</strong> ')
data.setDate(data.getDate() + 2);
document.write(data.toDateString());
document.write('<br><strong>Removendo 2 DIAS:</strong> ')
data.setDate(data.getDate() - 2);
document.write(data.toDateString());

//Adicionar/Remover MESES:
document.write('<br><br><strong>Adiconando mais 2 MESES:</strong> ')
data.setMonth(data.getMonth() + 2);
document.write(data.toDateString());

document.write('<br><strong>Removendo 2 MESES:</strong> ')
data.setMonth(data.getMonth() - 4);
document.write(data.toDateString());

//Adicionar/Remover ANOS:
document.write('<br><br><strong>Adiconando mais 2 ANOS:</strong> ')
data.setFullYear(data.getFullYear() + 2);
document.write(data.toDateString());

document.write('<br><strong>Removendo 2 ANOS:</strong> ')
data.setFullYear(data.getFullYear() - 4);
document.write(data.toDateString());

var data = new Date();
document.write('<hr><br><strong>Trabalhando com o número de dias contados 720:</strong> ');
document.write("<br><br><strong>Data Atual</strong> " + data.toDateString() + "<br>");
data.setDate(data.getDate() + 720);
document.write('<strong>Data após 720 dias: </strong>' + data.toDateString());


//Data Inicial: 10/01/2020.
//Data Final: 18/10/2021.

var data1 = new Date(2020,0,10);
var data2 = new Date(2021,9,18);


document.write('<hr><br><strong>A diferença entre duas datas informadas:</strong> ');
document.write(`<br>A diferença entre data1 = 10/01/2020 e data2 = 18/10/2021.<br>`)

document.write('<br>Converter datas para algo que possamos calcular. Usar o método getTime()')
document.write('Recupera a quantidade de milisecundos que existem entre as datas de 1/01/1970 e a data atual.<br><br>');

document.write('Data1 = ' + data1.getTime() + '<br>');
document.write('Data2 = ' + data2.getTime() + '<br><br>');

document.write('Calcular a diferença entre os milisecundos obtidos.<br>');
var resultado = (data1.getTime() - data2.getTime());
document.write('Obtendo como resultado:' + resultado + '.<br><br>');
document.write('Precisamos trabalhar com os resultados positivos mediante a conversão para datas. Podemos usar a biblioteca "Math" com o método abs(). ')

resultado = Math.abs(data1.getTime() - data2.getTime());
document.write('Ficando '+ resultado + '<br> Agora é descobrir quantos dias essa quantidade de milisecundos representa.<br><br>');
document.write('<strong>1 dia tem 24horas, cada hora tem 60 minutos e cada minuto tem 60 segundos e cada segundo tem 1000 milisegundos.</strong>');
document.write(' 1 dia tem: 24*60*60*1000 resultadando em: ' + 1*24*60*60*1000 + ' milisegundos. <br><br>');
var UmDiaTem = 1*24*60*60*1000;
document.write(' Logo a divisão entre: ' + resultado + ' por ' + UmDiaTem + ' em um dia, resulta em: ' + resultado/UmDiaTem + ' dias.<br><br>');

document.write('Se o resultado ficar quebrado podemos usar o "Math.ceil(resultado)" para arredondar para CIMA.')


