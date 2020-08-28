const express = require('express')
const app = express()
const getPokes = require('./api/routes/getPokes')
const savePokes = require('./api/routes/savePokes')
const delPokes = require('./api/routes/delPokes')
const port = 3000

app.listen(port, function(){
    console.log(`listen on ${port}`)
})

getPokes(app)

savePokes(app)

delPokes(app)

app.get('/', function(req, res){
    res.send('hello')
})