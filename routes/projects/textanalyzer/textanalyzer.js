const express = require('express');
const Router = express.Router();
const path = require('path');
const projects = require(path.join(__dirname, '../', '../','../', 'controllers', 'projectsController.js'))


Router.route('/').get(projects.getTextanalyzerHtml);
Router.route('/js').get(projects.getTextanalyzerJs);
Router.route('/css').get(projects.getTextanalyzerCss);

module.exports = Router;