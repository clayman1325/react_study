const eventEmitter = require("./custom_event_base")

eventEmitter.on("hello", (name, req) => {
    console.log("hello world", name, req.url)
    return req
})

// module.exports = sayHello(firstname, lastname, req) {
//     console.log(firstname, lastname, req)
// }


// class Event {
//     constructor () {
//         this.events = {}
//     }

//     on(key, fnc) {
//         this.events[key] = fnc
//     }

//     emit(key, argv) {
//         this.events[key](argv)
//     }
// }