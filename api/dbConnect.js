var mysql = require('mysql')

module.exports = function dbConnect(query, data, callback){
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

    connect.query(query, data, function(error, result, fields){
        if(error){
            console.log(error)
            throw(error)
        }
        //console.log(result)
        return callback(result)
    })

    return connect
}
