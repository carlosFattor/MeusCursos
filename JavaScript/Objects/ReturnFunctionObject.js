//"this" -> refere-se ao escopo de chamada da function
var pessoa = {
	nome: "Carlos",
	idade: 20,
	getIdade: function(){
		return this.idade;//usa-se o this pois idade não esta no contexto global, sem o this causaria erro
	}
};

console.log(pessoa.getIdade());