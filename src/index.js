var cors = require('cors');
require('dotenv').config()

const express = require('express');
const supabase = require('./db');

const app = express()
const port = 3000
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.json('Hello World!');
});

app.post('/', async (req, res) => {
    try {
        var content = Buffer.from(JSON.stringify(req.body), 'utf8').toString('base64');
        res.json((await supabase.from('logs').insert([{
            content
        }])));
    } catch (error) {
        res.json(error.message);
    }
})

module.exports = app;