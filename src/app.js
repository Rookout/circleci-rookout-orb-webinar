//app.js
const express = require('express');
const app = express();
app.get('/plus', (req, res) => {
    const {first_number, second_number } = req.query;
    let result = parseInt(first_number) + parseInt(second_number);
    if (isNaN(result)) {
        return res.status(500).send(`Internal server error`);
    }
    else {
        res.status(200).send(`${first_number}+${second_number}=${result}`)
    }});


module.exports = app;
