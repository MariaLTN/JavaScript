function Multiplicar() {
    var M = document.getElementById('T');
    var I = document.getElementById('I');

    if (I.value.length==0) {
        M.innerHTML += `Impossível multiplicar<br>`;        
    } else {
        M.innerHTML = ''; //Reponsável por limpar a tela quando a função é chamda mais de uma vez.
        var I = Number(I.value);
        M.innerHTML += `Resultado:<br><br>`;  
        for (var Controle = 1; Controle <= 10; Controle++){
            var Resultado = (Controle*I);
            M.innerHTML += `${I} x ${Controle} = ${Resultado}<br>`
        }        
    }
}