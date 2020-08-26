const express = require('express')
const app = express()
const pokes = require('./api/routes/pokes')
const port = 3000

app.listen(port, function(){
    console.log(`listen on ${port}`)
})

pokes(app)

app.get('/', function(req, res){
    res.send('hello')
})