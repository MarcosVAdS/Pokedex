module.exports = function(app){
    const controller = require('../controllers/savePokes')()
    app.route('/api/savePokes').get(controller.savePokes)
}