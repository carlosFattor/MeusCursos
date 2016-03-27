function ProdDAO(connFactory){
    this._connFactory = connFactory;
}

ProdDAO.prototype.listProds = function(callback){
    this._connFactory.query('select * from livros', callback);
}

ProdDAO.prototype.save = function(product, callback){
    this._connFactory.query('INSERT INTO livros set ?', product, callback);
}
module.exports = function() { 
    return ProdDAO;
}