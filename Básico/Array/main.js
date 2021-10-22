document.write('<h3>Array Básico:</h3>');

document.write('<h4>Declaração do Array:</h4>');
document.write('var Lista = Array() <br>');
document.write('var Lista = [] <br>');

document.write('<h4>Alimentação dos Arrays:</h4>');
document.write('var Lista = Array("Banana","Uva","Pêra")<br>');
document.write('var Lista = ["Banana","Uva","Pêra"]<br>');
document.write('Lista[index] = "Banana";<br>Lista[index] = "Uva";<br>Lista[index] = "Pêra";<br>');
document.write('<br><strong>Nesse último casos, o criador da lista pode escolher a partir de qual número começar a lista:</strong><br>');


var Lista = [];
Lista[5] = "A";
Lista[6] = "B";
Lista[7] = "C";

document.write('Lista[5] = "A";<br>Lista[6] = "B";<br>Lista[7] = "C";<br>');
document.write('<br>Se for feito um Lista.length ele retornará: ' + Lista.length);
document.write('. Sendo interpretado da seguinte maneira: [empty x 5, "A","B", "C"]<hr>');


document.write('<h3>Array Multidirecional:</h3>');

var Lista_Coisas = Array();
Lista_Coisas['frutas'] = Array('Laranja', 'Limão');
Lista_Coisas['pessoas'] = Array('Joacquin', 'José');

document.write('var Lista_Coisas = Array();<br>Lista_Coisas["frutas"] = Array("Laranja", "Limão");<br>Lista_Coisas["pessoas"] = Array("Joacquin","José");<br><br>');
document.write('Lista_Coisas["frutas"] retornará [' + Lista_Coisas['frutas'] + ']<br>');
document.write('Lista_Coisas["pessoas"][1] retornará ' + Lista_Coisas['pessoas'][1] +'<hr>');

document.write('<h3>Array - Inclusão e Exclusão:</h3>');

var Material_Escolar = ["Lápis","Borracha", "Caneta", "Caderno"];

document.write('var Material_Escolar = ["Lápis","Borracha", "Caneta", "Caderno"];<br><br>');

document.write('<strong>Incluir elementos no inicio da lista:</strong><br>');
Material_Escolar.unshift("Marca-Texto")
document.write('Material_Escolar.unshift("Marca-Texto");<br>' + 'RESULTADO: [' + Material_Escolar  + ']<br><br>');

document.write('<strong>Incluir elementos no final da lista:</strong><br>');
Material_Escolar.push("Estojo")
document.write('Material_Escolar.push("Estojo");<br>' + 'RESULTADO: [' + Material_Escolar + ']<br><br>');

document.write('<strong>Excluir elementos no inicio da lista:</strong><br>');
Material_Escolar.shift()
document.write('Material_Escolar.shift();<br>' + 'RESULTADO: [' + Material_Escolar + ']<br><br>');

document.write('<strong>Excluir elementos no final da lista:</strong><br>');
Material_Escolar.pop()
document.write('Material_Escolar.pop();<br>' + 'RESULTADO: [' + Material_Escolar+ ']<hr >');


document.write('<h3>Pesquisando Elementos do Array:</h3>');

var Lista_Ferramentas = Array('Prego','Martelo','Machado');

document.write('var Lista_Ferramentas = Array("Prego","Martelo","Machado");<br><br>');
document.write('O Lista_Ferramentas.indexOf do "Machado" é '+Lista_Ferramentas.indexOf("Machado")+ '<br>');
document.write('O Lista_Ferramentas.indexOf do "Espelho" é '+Lista_Ferramentas.indexOf("Espelho")+ '. Deu -1, pois esse elemento não existe na Lista_Ferramentas.<br>');
document.write('<br><strong>A pesquisa é CASE-SENSITIVE.</strong><hr>');

document.write('<h3>Ordenando Elementos do Array:</h3>');

var Lista = Array('Udemy','Alura','SENAI');

document.write('var Lista = Array("Udemy","Alura","SENAI");<br>');
document.write('Método sort() = '+Lista.sort()+'<br><br>');

var L_Numeros = Array(8,9,12,55,36,7,0);
document.write('var L_Numeros = Array(8,9,12,55,36,7,0);<br>');
document.write('Método sort() = '+L_Numeros.sort());
document.write('Ou seja, ele ordena de acordo alfabetica, no qual o 1 do 12 aparece na frente do 7. Pois, ele vai da esquerda para a direita. Assim, o número 112, é comparado pelo primeiro 1, depois o segundo 1 e por fim o 2, e não o número 112.<br><br>');

document.write('Para ordenar em quesitos de número: Temos que usar uma function, sendo ela: function OrdenaNumero(a,b) {return a-b;} Que é um exmeplo de CallBack.<br><br>');
function OrdenaNumero(a,b) {return a-b;}
//Exemplo de função CallBack.

document.write('E então usar: L_Numeros.sort(OrdenaNumero)), resultando em: ' + L_Numeros.sort(OrdenaNumero) + '<br>');
document.write('<strong>Se estiver uma letra nessa lista de números, a ordenação torna-se indeifinida. Exemplo: [1,2,3, abc, 5]. Mas se ela for: ["1","2","3","5"] ela funciona (Mas sem letras);</strong><br>');

document.write(' <br>');