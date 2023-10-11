const express= require('express');
const validations = require("./middleware/validations")
const usersRouter = require('./routes/users')

const app = express()

app.use(express.json())
app.use(validations)

app.use('/users', usersRouter)

app.get('/', (req, res) => {
    res.status(200).send('Hello David!')
})

app.listen(3000, () => {
    console.log('listening in port 3000');
})