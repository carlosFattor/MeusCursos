var Pessoa = function(nome, idade){
	this.nome = nome;
	this.idade = idade;
}

console.log(new Pessoa("Carlos", 20));
console.log(new Pessoa("Fattor", 30));

var Alexandre = {};
var CarlosFattor = {};

Pessoa.call(Alexandre, "Alexandre", 20);
Pessoa.apply(CarlosFattor, ["CarlosFattor", 30]);

console.log(Alexandre);
console.log(CarlosFattor);