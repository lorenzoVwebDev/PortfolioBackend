const express = require('express');
const Router = express.Router();
const path = require('path');
const projects = require(path.join(__dirname, '../', '../','../', 'controllers', 'projectsController.js'))

Router.route('/').get(projects.getTictactoeHtml)
Router.route('/js').get(projects.getTictactoeJs)
Router.route('/css').get(projects.getTictactoeCss)

module.exports = Router;