const customExpress = require('./config/customExpress')
const app = customExpress()

app.listen(3001, () => {
    console.log('Iniciado na porta 3000')
})


