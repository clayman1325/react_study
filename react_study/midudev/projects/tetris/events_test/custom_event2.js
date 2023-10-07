const eventEmitter = require("./custom_event_base")

eventEmitter.on("hello", (name, req) => {
    console.log("hello world from custom event 2", name, req.url)
    return req
})
