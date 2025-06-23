/*
    unordered collections of unique strings
    * SADD adds a new member to a set.
    * SREM removes the specified member from the set.
    * SISMEMBER tests a string for set membership.
    * SINTER returns the set of members that two or more sets have in common (i.e., the intersection).
    * SCARD returns the size (a.k.a. cardinality) of a set.
*/

const client = require('./client');

async function init() {
    for (let i = 1; i<10; i++) {
        await client.sadd("set:1", `Nodejs set #${i}`);
    }

    // const res = await client.smembers("set:1");
    const res = await client.sismember("set:1", "Nodejs set #50");  //returns 0
    console.log(res);
}

init()