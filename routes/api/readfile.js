const express = require('express');
const Router = express.Router();
const path = require('path');
const readfile = require(path.join(__dirname, '../','../', 'controllers', 'readFileController.js'))

Router.route('').post(readfile.sendArray)

module.exports = Router;