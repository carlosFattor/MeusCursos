var carros = [];

carros[0] = {marca: "Ford", modelo: "Ka", preco: 1578};
carros[1] = {marca: "Chevrolet", modelo: "Corsa", preco: 2459};
carros[2] = {marca: "Fiat", modelo: "Palio", preco: 63289};

var sortPreco = carros.sort(function(a, b){
	return a.preco - b.preco;
});

console.log(sortPreco);