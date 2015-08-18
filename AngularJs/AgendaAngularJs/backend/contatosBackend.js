var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

var contatos = [
	{nome: "Bruno", telefone: "9999-2222", cor: "blue",data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular", preco: 2}},
	{nome: "Sandra", telefone: "9999-3333", cor: "blue",data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular", preco: 3}},
	{nome: "Mariana", telefone: "9999-9999", cor: "blue",data: new Date(), operadora: {nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1}},
	{nome: "Carlos", telefone: "1634126328", cor: "blue", data: new Date(), operadora: {nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}},
	{nome: "Fattor", telefone: "11988313154", cor: "yellow", data: new Date(), operadora: {nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1}},
	{nome: "Ludmila", telefone: "964300041", cor: "red", data: new Date(),operadora: {nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1}}
];
var operadoras = [
	{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
	{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
	{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
	{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
	{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
];

app.listen(process.env.PORT || 3412);

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/contatos', function(req, res) {
  res.json(contatos);
});

app.post('/contatos', function(req, res) {
  contatos.push(req.body);
  res.json(true);
});

app.get('/operadoras', function(req, res) {
  res.json(operadoras);
});
