const dbConnect = require('../dbConnect')

module.exports = () => {
    var values = [3]
    const controller = {}

    controller.delPokes = function(req, res){
        dbConnect('DELETE FROM Poke WHERE PokeID = ?', values, function(result){
            dataPoke = result
            return dataPoke
        })
        res.status(200).json(dataPoke)
    }

    return controller
}