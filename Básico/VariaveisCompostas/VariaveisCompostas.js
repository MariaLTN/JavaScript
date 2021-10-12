var ArrayNum = [5, 8, 4, 2, 0];
document.write("O vetor é inicial [" + ArrayNum + "] com o tamanho (length) é " + ArrayNum.length + "<br><br>");
for (var i=0; i<ArrayNum.length; i++){
    document.write(`O conteúdo respectivo do index[${i}] é ${ArrayNum[i]}<br>`);
}
document.write("<br><br>Utilizando o push(10), ou seja adicionar o valor 10 no index 6, que ainda não existe.<br>");
ArrayNum.push(10);
document.write("<br>O vetor alterado fica [" + ArrayNum + "] com o tamanho (length) é " + ArrayNum.length + "<br>");

//Só funciona para Array/Objeto:
document.write("<br>Utilizando o for (Variavel in Array). Observação: Só funciona para Array/Objeto: <br>");
for (let posicao in ArrayNum){
    document.write(`No index[${posicao}] temos o valor ${ArrayNum[posicao]}<br>`);
} document.write("<br><hr>");