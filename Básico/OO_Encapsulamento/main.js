//Modelo do Objeto

class Televisao{
	constructor(){
		this._relacaoCanais = Array(2,4,5,7,10);
		this._canalAtivo = 5;
		this._volume = 15;

		//Quando o desenvolvedor cria com o _ indica ao programador, 
		//que não é legal pegar o elemento dessa forma, e sim, usando um
		//método get.
	}

	get canalAtivo(){ 
		return this._canalAtivo;
	}

	set canalAtivo(canal){
		if (this._relacaoCanais.indexOf(canal)!==-1){
			this._canalAtivo = canal;
		}				
	}
}

let TV = new Televisao();
TV.canalAtivo = 20;

console.log(TV.canalAtivo);
//console.log(this.canalAtivo); // Sem o método get ela funciona.
console.log(TV.canalAtivo); //Não usamos o (), pq o get interpretador do JS entende 
// sabe que ele tem que procurar por uma função com essa descrição. Sendo uma pseudovariavel.
// Esse encapsulamento serve por questões de segurança. 