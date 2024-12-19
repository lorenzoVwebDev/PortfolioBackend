const express = require('express');
const Router = express.Router();
const path = require('path');
const projects = require(path.join(__dirname, '../', '../', '../', 'controllers', 'projectsController.js'));


Router.route('/').get(projects.getLoginpageHtml)
Router.route('/js').get(projects.getLoginpageJs)
Router.route('/css').get(projects.getLoginpageCss) 

module.exports = Router;