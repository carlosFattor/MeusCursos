var regExp = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/;

var telefone1 = "(16) 999999999";
var telefone2 = "(16) 99999-9999";

console.log(regExp.exec(telefone1));//retorna detalhes da execução

console.log(regExp.test(telefone1));//retorna apenas verdadeiro ou falso

console.log(regExp.exec(telefone2));//retorna detalhes da execução

console.log(regExp.test(telefone2));//retorna apenas verdadeiro ou falso