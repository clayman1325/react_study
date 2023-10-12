const express = require("express")
const mongoose = require("mongoose")

const router = express.Router()

const tourSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'A tour must have a name'],
      unique: true,
      trim: true,
    },
    duration: {
      type: Number,
      required: [true, 'A tour must have a duration'],
    },
    maxGroupSize: {
      type: Number,
      required: [true, 'A tour must have a group size'],
    },
    difficulty: {
      type: String,
      required: [true, 'A tour must have a difficulty'],
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, 'A tour must have a price'],
    },
    priceDiscount: Number,
    summary: {
      type: String,
      trim: true,
      required: [true, 'A tour must have a description'],
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      required: [true, 'A tour must have a cover image'],
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    startDates: [Date],
});
const Tour = mongoose.model("Tour", tourSchema)

router.get("/", async (req, res) => {
    let filter = { ...req.query }
    delete filter['page'];
    const tours = await Tour.find( filter )
    console.log(req.query)
    res.send(tours)
    res.status(200)
    res.end()
})

router.post("/", async (req, res) => {
    const body = req.body
    const tour = await Tour.create(body)
    res.send(tour)
    res.status(201)
    res.end()
})

router.patch("/:id", async (req, res) => {
    const body = req.body
    const { id } = req.params
    const tour = await Tour.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true
    })
    res.send(tour)
    res.status(200)
    res.end()
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params
    await Tour.findByIdAndDelete(id)
    res.status(200)
    res.end()
})


module.exports = router