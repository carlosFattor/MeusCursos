var carros = [];

carros[0] = {marca: "Ford", modelo: "Ka", preco: 1578};
carros[1] = {marca: "Chevrolet", modelo: "Corsa", preco: 2459};
carros[2] = {marca: "Fiat", modelo: "Palio", preco: 63289};

var total = carros.reduce(function(prev, cur){//prev -> elemento anterior || cur -> elemento atual
	return prev+cur.preco;
}, 0); //prec -> comeca com 0

console.log(total);