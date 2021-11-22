document.write(`<h3>Operador Rest/Spread</h3>`);
document.write(`O que vai definir eles é o contexto utilizado. `);
document.write(`Chamamos de <strong>Spread</strong> para espalhar a estrutura de dados e <strong>Rest</strong> para fazer a operação inversa.`);
//document.write(`<p>De forma prática temos:</p>`);

document.write(`<p>Contexto Spread: ESPALHAMOS</p>`);
document.write(`<strong>Olhar o console</strong>. Algumas destas formas podem ser muito úteis para outros assuntos.`);

//String:
let tituloArtigo  = "Como utilizar o operador Rest/Spread";
console.log(tituloArtigo)
console.log(...tituloArtigo)
console.log([...tituloArtigo])
console.log("---")

//Array
let curso1 = ["Engenharia de Computação", "Medicina"];
let curso2 = ["Ciências Contáveis","Filosofia","História"];
let curso3 = [...curso1, ...curso2] 
console.log(curso3)
console.log("---")

//SEM O SPREAD:
let curso4 = [curso1,curso2]
console.log(curso4)
console.log("---")

//Objetos
let pessoa = {nome:"Maria", idade: 21}
let endereco = {rua: "José Abigail", cidade: "São João"}
let dados = {...pessoa, ...endereco}
console.log(dados)
console.log("---")

//Sem o SPREAD: 
let dados1 = {pessoa, endereco}
console.log(dados1)
console.log("---")

///////////////////////////////////
document.write(`<hr><p>Contexto REST: JUNTAMOS</p>`);
document.write(`<p>Muito utilizado em conjunto com funções.</p>`);

// function soma(){
//     let resultado =0;
//     return resultado;
// }

// soma(3,8,5,7)

// Como podemos recuperar esses parâmetros dentro da nossa função e atuar sobre cada um deles
// de forma dinâmic??
// Utilizando o REST

function soma(...param){
    let resultado =0;    
    console.log(param)
    param.forEach(v => resultado+= v)
    console.log(resultado)
    return resultado;
}
soma(3,8,5,7)
console.log("---")


// Uma outra possibilidade é com parâmetros indefinidos 

function multiplicacao(m, ...p){
    console.log(m)
    console.log(p)
}

multiplicacao(5,7,12,3,49)
// O número cinco será o nosso "m" e os outros serão o nosso "p";
console.log("---")


function multiplicacao1(ma, ...pa){
    let res = 0;
    pa.forEach(v=> res += ma*v)
    console.log(res)
    return res
    
}

multiplicacao1(5,7,12,3,49)