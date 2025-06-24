const express = require('express');
const axios = require('axios');
const client = require('./client');

const app = express();

app.get('/', async (req, res) => {
    const value = await client.get('apiValues');
    if (value) return res.json(JSON.parse(value));

    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    await client.set('apiValues', JSON.stringify(response.data))
    await client.expire('apiValues', 60 * 60); // Set expiration time to 1 hour
    
    return res.json(response.data);
})

app.listen(3000);