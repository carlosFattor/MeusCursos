var mysql  = require('mysql');

var connectMYSQL = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'kronuz',
        password: '1234',
        database: 'nodedb'
    });
}

module.exports = function() {
    return connectMYSQL;
}