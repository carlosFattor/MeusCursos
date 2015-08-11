var getIdade = function(extra){
	console.log(arguments);
	return this.idade + extra;
}

var pessoa = {
	nome: "Alexandre",
	idade: 20,
	getIdade: getIdade
};

console.log(pessoa.getIdade(2));//20
console.log(getIdade(2));//undefined
console.log(getIdade.call(pessoa, 2, 3, 4));//20 -> parametros a mais são ignorados
console.log(getIdade.apply(pessoa, [2, 3, 4]));//20 -> parametros a mais são ignorados