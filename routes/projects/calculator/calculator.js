const path = require('path');
const express = require('express');
const router = express.Router();
const projects = require(path.join(__dirname, '../', '../', '../', 'controllers', 'projectsController.js'))


router.route('/').get(projects.getCalculatorHtml) 
router.route('/js').get(projects.getCalculatorJs) 
router.route('/css').get(projects.getCalculatorCss) 


module.exports = router;
