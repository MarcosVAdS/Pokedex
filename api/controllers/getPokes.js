const dbConnect = require('../dbConnect')

module.exports = () => {
    var values = []
    const controller = {}

    controller.listPokes = function(req, res){
        dbConnect('SELECT * FROM Poke', values, function(result){
            dataPoke = result
            return dataPoke
        })
        res.status(200).json(dataPoke)
    }

    return controller
}