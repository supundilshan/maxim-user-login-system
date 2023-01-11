const express = require('express');
const appRoute = express.Router();

// Import route models
const InsertUser = require("./RouteModels/RegisterUser")

// Routes for handle interactions

appRoute.route('/newuser').post((req, res) => { InsertUser.InsertUserDetails(req, res) });



module.exports = appRoute;