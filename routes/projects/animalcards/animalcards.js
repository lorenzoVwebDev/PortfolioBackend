const path = require('path');
const express = require('express');
const router = express.Router();
const projects = require(path.join(__dirname, '../', '../', '../', 'controllers', 'projectsController.js'))


router.route('/').get(projects.getAnimalcardsHtml) 
router.route('/js').get(projects.getAnimalcardsJs) 
router.route('/css').get(projects.getAnimalcardsCss) 


module.exports = router;
