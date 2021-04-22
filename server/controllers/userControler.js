const db = require('../database/db')

module.exports = app => {
    app.get('/', (req, res) => {
        res.json({ info: 'Node.js, Express, and Postgres API' })
    })
}