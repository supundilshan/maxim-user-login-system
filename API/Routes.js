const express = require('express');
const appRoute = express.Router();

appRoute.route('/').get((req, res) => {
    res.send("i am index");
});

module.exports = appRoute;