const dbConnect = require('../dbConnect')

module.exports = () => {
    dbConnect('SELECT * FROM Poke', function(result){
        dataPoke = result
        return dataPoke
    })
    const controller = {}
    
    controller.listPokes = function(req, res){
        res.status(200).json(dataPoke)
    }

    return controller
}