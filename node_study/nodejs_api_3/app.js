import express, { json } from "express"
import { createMovieRouter } from "./routes/movies.js"
import { corsMiddleware } from "./middlewares/cors.js"

import "dotenv/config"

export const createApp = ({ movieModel }) => {
    const app = express()
    app.use(json())
    app.use(corsMiddleware)
    app.use("/movies", createMovieRouter({ movieModel }))
    app.get('/', (req, res) => {
        console.log("test. ..... . .. . . ..")
        res.json({"message": "success"})
    })
    const PORT = process.env.PORT ?? 3000

    app.listen(PORT, () => {
        console.log(`server listening on port http://localhost:${PORT}`)
    })
}