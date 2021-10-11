function Contar() {
    var M = document.getElementById('T');
    var I = document.getElementById('I');
    var F = document.getElementById('F');
    var P = document.getElementById('P');

    if (I.value.length==0 || F.value.length==0 || P.value.length==0) {
        M.innerHTML += `Impossível contar`;        
    } else {
        var I = Number(I.value);        
        var F = Number(F.value);
        var P = Number(P.value);
        if (P<=0){
            M.innerHTML += `Impossível contar`; 
        } else {
            M.innerHTML += `<br>Contando:<br>`;
            if (F>=I){
                for (let C=I; C<=F; C+=P) 
                    {M.innerHTML += `${C} \u{27A1} `;}
                    //Esse code da unicode só funciona com essas aspas;
            } else {
                for (let C=I; C>=F; C-=P)
                    {M.innerHTML += `${C} \u{27A1} `;}
                }
            M.innerHTML += `FIM :)`;
        }
    }
}

