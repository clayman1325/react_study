const dotenv = require("dotenv")
const mongoose = require("mongoose")
const app = require("./app")

dotenv.config({ path: "./config.env" })

const PASSWORD = process.env.PASSWORD
const DB       = process.env.DATABASE.replace('<PASSWORD>', PASSWORD)

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
.then(() => {
    console.log("connected to mongo DB")
})

app.listen(3000, () => {
    console.log("listening in port:                 3000")
})

