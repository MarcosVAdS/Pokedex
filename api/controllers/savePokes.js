const dbConnect = require('../dbConnect')

module.exports = () => {
    var values = [3, 'Venusaur', 'grass, poison']
    dbConnect('INSERT INTO Poke VALUES (?, ?, ?)', values, function(result){
        dataPoke = result
        return dataPoke
    })

    const controller = {}
    
    controller.savePokes = function(req, res){
        res.status(200).json(dataPoke)
    }

    return controller
}