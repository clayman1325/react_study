import express, { json } from "express"
import { createMovieRouter } from "./routes/movies.js"
import { CorsMidelware } from "./middlewares/cors.js"

import "dotenv/config"

export const createApp = ({ movieModel }) => {
    const app = express()
    app.use(json())
    app.use(CorsMidelware)
    app.use("/movies", createMovieRouter({ movieModel }))

    const PORT = process.env.PORT ?? 3001

    app.listen(PORT, () => {
        console.log(`server listening on port http://localhost:${PORT}`)
    })
}