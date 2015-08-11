//"this" -> depende do contexto
var getIdade = function(){
	return this.idade;
}

var pessoa = {
	nome: "Fattor",
	idade: 20,
	getIdade: getIdade //referenvia de metodo nao utiliza-se "()"
};


console.log(pessoa.getIdade);
console.log(pessoa.getIdade());