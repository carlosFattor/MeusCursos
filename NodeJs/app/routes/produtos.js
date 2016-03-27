module.exports = function(app){
    app.get("/produtos", function(req, res){
        var connFactory = app.infra.connFactory();
        var productsDAO = new app.infra.ProdDAO(connFactory);
        
        productsDAO.listProds(function(err, results){
            res.render('produtos/lista', {lista: results});
        });
        
        connFactory.end();
    });
    
    app.get("/produtos/form", function(req, res){
        res.render('produtos/form');
    });
    
    app.post("/produtos", function(req, res){
        
        var product = req.body;
                
        var connFactory = app.infra.connFactory();
        var productsDAO = new app.infra.ProdDAO(connFactory);
        
        productsDAO.save(product, function(error, resultados){
            res.redirect('/produtos');
        })
    })
}