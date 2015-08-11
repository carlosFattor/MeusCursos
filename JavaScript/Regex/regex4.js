var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/g;

var telefone1 = "<table><tr><td>(90) 9876-4563</td><td>(90) 9876-4544</td><td>(90) 9876-4522</td></tr></table>";

console.log(telefone1.replace(regExp, "telefone"));//retorna apenas verdadeiro ou falso
