/*
    Redis hashes are record types structured as collections of field-value pairs.
    * HSET: sets the value of one or more fields on a hash.
    * HGET: returns the value at a given field.
    * HMGET: returns the values at one or more given fields.
    * HINCRBY: increments the value at a given field by the integer provided.
*/

const client = require('./client');

async function init() {
    await client.hset(
        "hash_set:1", 
        {
            'date': '23-06-2025',
            'time': '4pm',
            'event': 'Nodejs Redis Hashes',
        }
    )

    const res = await client.hgetall("hash_set:1");
    console.log(res);
}

init()