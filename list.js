
const client = require('./client');

async function init() {
    for (let i=1; i <= 10; i++) {
        await client.lpush("list:1", `Nodejs list #${i}`);
    }
    const res = await client.lrange("list:1", 0, -1);
    console.log(res);
}

init()