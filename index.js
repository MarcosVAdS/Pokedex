const express = require('express')
const app = express()
const getPokes = require('./api/routes/getPokes')
const savePokes = require('./api/controllers/savePokes')
const port = 3000

app.listen(port, function(){
    console.log(`listen on ${port}`)
})

getPokes(app)

savePokes(app)

app.get('/', function(req, res){
    res.send('hello')
})