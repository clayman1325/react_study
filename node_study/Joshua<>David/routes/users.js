const express = require('express')
const router = express.Router()
const { createUser, getUsers } = require('../controllers/userController')


router.get('/', getUsers)

router.get('/:id', (req,res) => {
    res.send("not implemented")
})

router.post('/', createUser)

router.put('/:id', (req, res) => {
    res.send("not implemented")
})

router.delete('/:id', (req, res) => {
    res.send("not implemented")
})

module.exports = router

