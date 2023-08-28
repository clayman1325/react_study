import { Router } from "express";

import { MovieController } from "../controllers/movies.js"

const moviesRouter = Router()

moviesRouter.get("/", MovieController.getAll)
moviesRouter.post("/", MoviesController.create)
moviesRouter.get("/:id", MovieController.getById)
moviesRouter.patch('/:id', MovieController.update)
moviesRouter.delete('/:id', MovieController.delete)
