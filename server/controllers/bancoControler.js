const db = require('../model/bancoModel')


module.exports = app =>{
    app.get('/', db.listBanco)
    app.get('/banco/:cod',db.getByCod )
    app.post('/banco/insert',db.insertBanco)
    // app.put('/bancos/:id', db.updateBanco())
    // app.delete('banco/:id', db.delelBanco())
}