var mysql = require('mysql')

module.exports = function dbConnect(query, callback){
    var connect = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'PokeProject'
    })
    
    connect.connect(function(err){
        if(err){
            console.error('error connect: ' + err.stack)
            return
        }
        console.log('connected as id' + connect.threadId)
    })

    connect.query(query, function(error, result, fields){
        return callback(result)
    })

    return connect
}
