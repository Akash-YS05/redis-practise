/*
    Redis lists are linked lists of string values
    * LPUSH adds a new element to the head of a list; RPUSH adds to the tail.
    * LPOP removes and returns an element from the head of a list; RPOP does the same but from the tails of a list.
    * LLEN returns the length of a list.
    * LMOVE atomically moves elements from one list to another.
    * LRANGE extracts a range of elements from a list.
    * LTRIM reduces a list to the specified range of elements.
*/

const client = require('./client');

async function init() {
    for (let i=1; i <= 10; i++) {
        await client.lpush("list:1", `Nodejs list #${i}`);
    }
    const res = await client.lrange("list:1", 0, -1);
    console.log(res);
}

init()