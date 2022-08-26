/*const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID*/

const { MongoClient, ObjectId } = require('mongodb')

//ruta
const connectionURL = 'mongodb://127.0.0.1:27017'
//Nombre de la base de datos
const databaseName = 'task-manager' 

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log('No se pudo conectar a la Base de Datos!')
    }

    console.log('Conectado a la base de datos!')

    const db = client.db(databaseName)

    //1:13:39

    //DELETE ************
    db.collection('tasks').deleteOne({
        _id: new ObjectId("6305cb775f035865ef873cb1")
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })    

    // db.collection('tasks').deleteMany({
    //     age: 43
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })    

    //UPDATE ************
    // db.collection('users').updateOne({
    //     _id: new ObjectId("6305cb775f035865ef873cad")
    // }, {
    //     $set: {
    //         age: 19
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectId("62f707c1e759638290eb56f9")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
        
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // READ **************

    // db.collection('users').findOne({ name: 'Luis', age: 1}, (error, user) => {
    //     if(error) {
    //         return console.log('Error !!!')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 43 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 43 }).count((error, count) => {
    //     console.log(count)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectId("62f7a90137388c0da4f94029")}, (error, task) => {
    //     console.log(task)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks)
    // })

    // INSERT ************

    // db.collection('users').insertOne({
    //     name: 'Luis',
    //     age: 43
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('No se pudo insertar')
    //     }

    //     console.log(result.insertedId)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Luis',
    //         age: 43
    //     },
    //     {
    //         name: 'Madelson',
    //         age: 20
    //     },
    //     {
    //         name: 'Popa',
    //         age: 68
    //     }
    
    // ], (error, result) => {
    //         if(error) {
    //             return console.log('No se pudo insertar')
    //         }
    
    //         console.log(result.insertedIds)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Limpiar la casa',
    //         completed: true
    //     },
    //     {
    //         description: 'Ir al Banco',
    //         completed: false
    //     },
    //     {
    //         description: 'Hacer la tarea',
    //         completed: false
    //     },

    // ], (error, result) => {
    //     if(error) {
    //         return console.log('No se pudo insertar!')
    //     }

    //     console.log(result.insertedIds)
    // })

})

