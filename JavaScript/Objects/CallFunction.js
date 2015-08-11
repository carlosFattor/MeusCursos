var produto = {
	nome:'Sapato',
	preco: 150
};

var formulaImpostoA = function(preco){
	return preco * 0.1;
};
var formulaImpostoB = function(preco){
	return preco * 0.2;
};

var calcularPreco = function(produto, formulaDoImposto){
	return produto.preco + formulaDoImposto(produto.preco);
};

console.log(calcularPreco(produto, formulaImpostoA));
console.log(calcularPreco(produto, formulaImpostoB));