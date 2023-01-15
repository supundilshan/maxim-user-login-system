const express = require('express');
const appRoute = express.Router();

// Import route models
const InsertUser = require("./RouteModels/CreateUser")

const ViewUser = require("./RouteModels/ViewUser")

// Routes for handle interactions

appRoute.route('/user').post((req, res) => { InsertUser.InsertUserDetails(req, res) });

appRoute.route('/user/:id').get((req, res) => { ViewUser.ReadUserTableByEmail(req, res) });


appRoute.route('/alluser').get((req, res) => { ViewUser.ReadUserTable(req, res) });



module.exports = appRoute;