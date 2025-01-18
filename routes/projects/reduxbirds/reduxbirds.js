const express = require('express');
const Router = express.Router();
const path = require('path');
const projects = require(path.join(__dirname, '../', '../', '../', 'controllers', 'projectsController.js'));

Router.route('/').get(projects.getReduxbirdsHtml);
Router.route('/js').get(projects.getReduxbirdsJs);
Router.route('/css').get(projects.getReduxbirdsCss);

module.exports = Router;