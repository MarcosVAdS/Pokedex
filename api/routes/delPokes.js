module.exports = function(app){
    const controller = require('../controllers/delPokes')()
    app.route('/api/delPokes').get(controller.delPokes)
}