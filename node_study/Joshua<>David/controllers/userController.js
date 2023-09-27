
const users = [
    {
        id: 0,
        name: "joshua",
        email: "joshuaprpich@hotmail.com",
        password: "123456"
    }
]

exports.createUser = (req, res) => {
    const data = req.body
    users.push(data)
    res.status(201).json(data)
}

exports.getUsers = (req, res) => {
    res.status(200).json({
        users: users
     })
}