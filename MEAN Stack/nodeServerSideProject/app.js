const express = require('express');
const { nextTick } = require('process');

const app = express();



app.use((req, res, next) => {
    next();
});

app.use((req, res, next) => {
    res.send('Hello from Express');
});

module.exports = app;
