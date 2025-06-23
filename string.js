const client = require('./client');

async function init() {
    // await client.set("msg:1", "Nodejs begins");

    /*
        expire removes the data from db after the specified time
        in seconds.
    */
    // await client.expire("msg:1", 10);
    const res = await client.mget("msg:1");
    console.log(res);
    
}
init()