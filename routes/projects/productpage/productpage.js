const express = require('express');
const Router = express.Router();
const path = require('path');
const projects = require(path.join(__dirname, '../', '../', '../', 'controllers', 'projectsController.js'))

Router.route('/').get(projects.getProductpageHtml);
Router.route('/js').get(projects.getProductpageJs);
Router.route('/css').get(projects.getProductpageCss);

module.exports = Router;