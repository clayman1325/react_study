const EventEmmiter = require("node:events")

const eventEmitter = new EventEmmiter()

module.exports = eventEmitter
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