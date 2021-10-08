//Primeiro Testa depois Executa o bloco:
window.document.write("<p>Primeiro Testa e depois Executa o bloco</p>");
var c1 = true;
var cont1 = 0;
while (c1) {            
    if (cont1==10) {
        c1 =  false;
    }
    window.document.write(`O valor de cont1 é ${cont1} e o c1 é ${c1}<br>`);
    cont1++;
}
window.document.write("<br>var c1 = true;<br>var cont1 = Number(0);<br>while (c1) {<br> if (cont1==10) { <br>c1 =  false; <br>}cont1++; <br>}");
window.document.write(`<p>A variavel cont1 contém o valor ${cont1}</p><hr>`);

//Primeiro Executa o bloco depois Testa:
window.document.write("<p>Primeiro Executa e depois Testa o bloco</p>"); 
var c2 = true;
var cont2 = Number(0);       
do {
if (cont2==10) {
       c2 = false;
   }
   window.document.write(`O valor de cont2 é ${cont2} e o c2 é ${c2}<br>`)
cont2++;
} while (c2);

window.document.write("<br>var c2 = true; <br> var cont2 = Number(0); <br> do { <br> if (cont2==10) { <br> c2 = false; <br> cont2++; } <br> while (c2)");
window.document.write(`<p>A variavel cont2 contém o valor ${cont2}</p><hr>`);

//Outra estrututra de repetição com variável de controle:
window.document.write("<p>Outra estrututra de repetição com variável de controle</p>"); 

for(var cont3 = 0; cont3<=10; cont3++) {
    window.document.write(`O valor de cont3 é ${cont3}<br>`)
}

window.document.write("<br>for(var cont3 = 0; cont3<=10; cont3++) {<br> ");
window.document.write(`<p>A variavel cont3 contém o valor ${cont3}</p><hr>`);

// Para testar usamos essa parte abaixo: 
// for(var cont3 = 0; cont3<=10; cont3++) {
//     console.log(`O valor de cont3 é ${cont3}`);
// }