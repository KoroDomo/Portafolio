
const mongoose = require('mongoose')

//se crea la base de datos (del api) luego de la primera operacion
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    // Las lineas debajo han sido comentadas ya que estan basadas en la version 4.xx y no son necesarias en 6.x
    //useNewUrlParser: true,
    //useCreateIndex: true,
    autoIndex: true,
    //useFindAndModify: false
})