const express = require('express');
const appRoute = express.Router();

// Import route models
const InsertUser = require("./RouteModels/CreateUser");
const ViewUser = require("./RouteModels/ViewUser");
const DeletUser = require("./RouteModels/DeleteUser");
const UpdateUser = require("./RouteModels/UpdateUser");

// Routes for handle interactions
appRoute.route('/').get((req, res) => { console.log("index") });

appRoute.route('/user').post((req, res) => { InsertUser.InsertUserDetails(req, res) });

appRoute.route('/user/:id').get((req, res) => { ViewUser.ReadUserTableByEmail(req, res) });


appRoute.route('/alluser').get((req, res) => { ViewUser.ReadUserTable(req, res) });

appRoute.route('/user/:id').delete((req, res) => { DeletUser.DeleteFromUserTable(req, res) });

appRoute.route('/user/:id').put((req, res) => { UpdateUser.Update(req, res) });


module.exports = appRoute;