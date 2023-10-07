const http = require("node:http")
const eventEmitter = require("./custom_event_base")
require("./custom_event")
require("./custom_event2")

const server = http.createServer();

server.on("request", (req, res) => {
    // eventEmitter.emit('hello', "joshua", req);
    // sayHello('hello', 'joshua', req)
})

function process_next_tick_example () {
    console.log("Hello => number 1");

    setImmediate(() => {
        console.log("Running before the timeout => number 3");
    });
    console.log("40")
    setTimeout(() => {
        console.log("The timeout running last => number 4");
    }, 0);

    process.nextTick(() => {
        console.log("Running at next tick => number 2");
    });

    res.end("hola mundo")
}

// joshua
// 1
// 2
// 3
// 4
// david
// 1
// 3
// 4
// 2

server.listen(8000,"127.0.0.1",() => {
    console.log("listening in port ???")
})
