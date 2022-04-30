const express = require('express');
const { corsHandler } = require('./middlewares/cors');

const app = express();

app.use(corsHandler);

app.get('/flights', (req, res) => {
    try {
        const flights = require(__dirname + '/static/flights.json');
        res.status(200).send(flights);
    } catch {
        res.status(500).send('Error');
    }
})

app.use((req, res) => {
    res.send('Path not found')
})

app.listen(3000, () => {
    console.log('Server has been started...');
})

module.exports = app;