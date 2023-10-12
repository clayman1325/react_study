import express from "express"
import logger from "morgan"
import { Server } from "socketio"
import { createServer } from "node:http"
import { Socket } from "node:dgram"
import dotenv from "dotenv"
import {createClient }

dotenv.config()

const app = express()
const server = createServer(app)

const io = new Server(server, {
    connectionStateRecovery: {
        maxDisconnectionDuration: 10000
    }
})

io.on("connection", (socket) => {
    console.log("a user has conencted")

    socket.on('disconnect', () => {
        console.log("an user has disconnected")
    })

    socket.on("chat message", async (msg) => {
        let result
        try {
            result = await db.execute({
                sql: "INSERT INTO MESSAGES (content) VALUES (:messages)",
                args: { msg }
            })
        } catch (e) {
            console.error(e)
            return
        }
        io.emit("chat message", result.lastInsertedRowid.toString())
    })

    if(!socket.reconnect) {
        try {
            const messages = db.execute('
                SELECT * from messages
            ')
        }
    }

})
const db = createClient(
    url:"",
    authToken: process.env.DB_TOKEN
)

await db.execute('
    CREATE TABLE IF NOT EXISTS messages(
        id INTEGER PRIMARY KEY AUTOINCREMENT
        content TEXT
    )
')

app.use(logger('dev'))

app.get("/", (req, res) => {
    res.sendFile(process.cwd() + "/client/index.html")
    res.end()
})

server.listen(3000, () => {
    console.log("listen in 3000")
})