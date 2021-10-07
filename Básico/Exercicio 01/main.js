function Carregar() {
    var Mensagem = window.document.getElementById('Texto');
    var Imagem = window.document.getElementById('Img');
    var Data_Atual = new Date();
    var Hora = Data_Atual.getHours();
    var Minutos = Data_Atual.getMinutes();
    Mensagem.innerHTML = `Agora são ${Hora} horas e ${Minutos} minutos.<br><br>`;
    if (Hora >= 0 && Hora<12) {
        Img.src = "Imagens/Manha.png";
        window.document.body.style.background = "#425632"
        Mensagem.innerHTML += 'Bom Dia!';
    } else if (Hora>=12 && Hora<18) {
        Img.src = "Imagens/Tarde.png";
        window.document.body.style.background = "#cf7426"
        Mensagem.innerHTML += 'Boa Tarde!';
    } else {
        Img.src = "Imagens/Noite.png";
        window.document.body.style.background = "#9e9689";
        window.document.section.style.background = "#aba295";
        Mensagem.innerHTML += 'Boa Noite!';
    }
}
