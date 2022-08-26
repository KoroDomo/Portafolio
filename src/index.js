const express = require('express');
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const jwt = require('jsonwebtoken')

const app = express();
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server corriendo: http://localhost:' + port)
})



const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123'}, 'abcdefg', { expiresIn: '7 days'})
    console.log(token)

    const data = jwt.verify(token, 'abcdefg')
    console.log(data)
}

myFunction()