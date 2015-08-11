//Funções Construtora vs Funções Fábrica

//Funções Fabrica
var criarPessoa = function(nome, idade){
	return {
		nome: nome,
		idade: idade
	};
};

console.log(criarPessoa("Carlos", 35));