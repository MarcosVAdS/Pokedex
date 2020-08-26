var request = require('request')
var fs = require('fs')

module.exports = function(app){
    const controller = require('../controllers/pokes')()
    app.route('/api/getPokes').get(controller.listPokes)
}

function giveMePoke() {
    request('https://pokeapi.co/api/v2/pokemon/', function(error, response, body){
        if(error && response.statusCode != 200){
            console.log(error)
        }else{
            fs.writeFile("./api/data/pokes.json", body, function(err){
                if(err){
                    console.log(err)
                }
            })
            pokes = body
            console.log(typeof(pokes))
        }
    })
}
