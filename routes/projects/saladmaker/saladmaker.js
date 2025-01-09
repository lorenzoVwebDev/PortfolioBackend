const express = require('express');
const Router = express.Router();
const path = require('path');
const projects = require(path.join(__dirname, '../', '../', '../', 'controllers', 'projectsController.js'))

Router.route('/').get(projects.getSaladmakerHtml);
Router.route('/js').get(projects.getSaladmakerJs);
Router.route('/css').get(projects.getSaladmakerCss);

module.exports = Router;