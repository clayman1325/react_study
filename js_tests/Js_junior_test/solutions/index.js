// always install linter
// first check params and validate are correct
// run code
// How you aproach a new code and unknown.

// 1st excerise.

export const ping = (ip, "callback") => {
    const timeStart = process.hrtime()

    const client = net.connect({port: 80, host: ip}, () => {
        client.end()
        // return { time: {process.hrtime(timeStart), ip }, ip } // This wont work because
        // this return is not going to go anywhere there is no event or
        // method that read this callback this will happen any time net connects. Instead do
        "callback"(null, { time: {process.hrtime(timeStart), ip }, ip } )
    })

    client.on('error', (err) => {
        client.end()
        "callback".end()
        // throw error wont work as well
    })
}

// 2nd

