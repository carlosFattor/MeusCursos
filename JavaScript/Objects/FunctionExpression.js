//Function Expression -> carregada após a interpretação(chamar a função antes de carregar-la acarreta erro)

//console.log(soma(2,2)) -> erro
var soma = function(a,b){
	return a+b;
}
console.log(soma(2,2));