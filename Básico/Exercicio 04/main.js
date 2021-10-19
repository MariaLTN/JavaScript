function Contar() {
    var Mensagem = document.getElementById('T');
    var DataInicial = document.getElementById('DI');
    var DataFinal =  document.getElementById('DF');
    
    if(DataInicial.value.length==0 || DataFinal.value.length==0){
        T.innerHTML = 'Impossível fazer a contagem com dados i.<br>'
    } else {
        var Informacoes_DataInicial = `${(DataInicial.value.slice(8,10))}/${(DataInicial.value.slice(5,7))}/${(DataInicial.value.slice(0,4))}`; 
        var Informacoes_DataFinal = `${(DataFinal.value.slice(8,10))}/${(DataFinal.value.slice(5,7))}/${(DataFinal.value.slice(0,4))}`; 

        var Data1 = new Date(Number(DataInicial.value.slice(0,4)), Number(DataInicial.value.slice(5,7)-1), Number(DataInicial.value.slice(8,10)));
        var Data2 = new Date(Number(DataFinal.value.slice(0,4)), Number(DataFinal.value.slice(5,7)-1), Number(DataFinal.value.slice(8,10)));

        var UmDiaTem = 1*24*60*60*1000;
        var Dias = Math.abs(Data1.getTime()-Data2.getTime())/UmDiaTem;
        var Resultado = Math.ceil(Dias);

        if (Resultado==1) {
            Mensagem.innerHTML = `Entre o dia ${Informacoes_DataInicial} e ${Informacoes_DataFinal} têm ${Resultado} dia de diferença.<br>`;
        } else if (Resultado==0){
            Mensagem.innerHTML = `Entre o dia ${Informacoes_DataInicial} e ${Informacoes_DataFinal} é de nenhuma dia de diferença.<br>`;
        } else {
            Mensagem.innerHTML = `Entre o dia ${Informacoes_DataInicial} e ${Informacoes_DataFinal} têm ${Resultado} dias de diferenças.<br>`;
        }
    }
}