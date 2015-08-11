var regExp = /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/;

var telefone = "(16) 9999-9999";

console.log(regExp.exec(telefone));//retorna detalhes da execução

console.log(regExp.test(telefone));//retorna apenas verdadeiro ou falso