var Lista = Array();
var M = document.getElementById('Texto'); 
var I = document.getElementById('Numeros'); 

var listaImpar = Array();
var listaPar = Array();

function NotinList(num, list) {
    if (list.indexOf(num)==-1) {
        return true;
    } else {
        return false;
    }
}

function adicionarLista() {
    M.innerHTML = "";
    if (Number(I.value)>100 || Number(I.value)<1 || I.value.length==0) {
        M.innerHTML = "Digite um número entre 1 e 100.<br><br>"
    } else {
        if (NotinList(Number(I.value), Lista)) {
            Lista.push(Number(I.value));
            M.innerHTML = Lista;
        } else {
            M.innerHTML = `O número ${I.value} já foi adicionado.<br>
            Tente adicionar mais valores ou clique em "Análise da lista".`
        }
    } 
    I.value = '';
    I.focus();
}

function analisadorLista(){
    if (Lista.length==0) {
        M.innerHTML = "A lista está vazia."
    } else {
        Lista.sort((a,b) => a-b);
        M.innerHTML = `A <strong>lista ordenada</strong> é: ${Lista}<br><br>`;

        var Soma=0, Menor, Maior, Tamanho;

        for (let pos in Lista) {
            if (Lista[pos]%2==0) {
                listaPar.push(Lista[pos]);
            } else {
                listaImpar.push(Lista[pos]);
            } Soma += Lista[pos];
        }
        
        Menor = Lista[0];
        Tamanho = Lista.length;
        Maior = Lista[Tamanho-1];
    
        M.innerHTML += `A <strong>soma</strong> dos elementos da lista é ${Soma}<br><br>`;
        M.innerHTML += `O <strong>menor</strong> elemento da lista é ${Menor}<br><br>`;
        M.innerHTML += `O <strong>maior</strong> elemento da lista é ${Maior}<br><br>`;
        M.innerHTML += `O <strong>tamanho</strong> da lista é ${Tamanho}<br><br>`;
        M.innerHTML += `Os <strong>elementos pares</strong> da lista são [${listaPar}]<br><br>`;
        M.innerHTML += `Os <strong>elementos impares</strong> da lista são [${listaImpar}]<br><br>`;
            
    //5,51,3,97,19,7,44;}
    }
}
