const express = require('express');
const router = express.Router();
const path = require('path');
const projects = require(path.join(__dirname, '../', '../', '../', 'controllers', 'projectsController.js'))

router.route('/').get(projects.getTodoListHtml);
router.route('/js').get(projects.getTodoListJs);
router.route('/css').get(projects.getTodoListCss);

module.exports =  router;