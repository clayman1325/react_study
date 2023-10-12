// always install linter
// first check params and validate are correct
// run code
// How you aproach a new code and unknown.
// node installed 18 or greater.
// divide and conquer a problem and see each single part separately
// race conditions
//
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

export function getDataPromisse(callback) {
    setTimeout(() => {
        callback(null, { data: "important data"});
    }, 2000)
}

getDataPromisse((err, data) => {
    console.log(data)
})

export function getDataPromisse() {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve({ data: "important data"});
            }, 2000)
        } catch (err) {
            reject(err)
        }
    })
}

getDataPromisse()
.then(data => {
    console.log(data)
})
.catch(error => {
    console.error(error)
})
// 3rd

// inside callbacks you cant return you need to pass a callback to capture the error or the successful result.
// import necessary dependencies
// async await improve the legibility.

