var carros = [];

carros[0] = {marca: "Ford", modelo: "Ka"};
carros[1] = {marca: "Chevrolet", modelo: "Corsa"};
carros[2] = {marca: "Fiat", modelo: "Palio"};

var marcas = carros.map(function(elemento){
	return elemento.marca;
});

console.log(marcas);

var size = carros.map(function(elemento){
	return {
		marca: elemento.marca,
		size: elemento.marca.length
	};
});

console.log(size);