const express = require('express');
const Router = express.Router();
const path = require('path');
const projects = require(path.join(__dirname, '../', '../', '../', 'controllers', 'projectsController.js'))

Router.route('/').get(projects.getFilecreatorHtml);
Router.route('/js').get(projects.getFilecreatorJs);
Router.route('/css').get(projects.getFilecreatorCss);

module.exports = Router;