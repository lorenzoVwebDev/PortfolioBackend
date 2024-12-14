const express = require('express');
const router = express.Router();
const path = require('path');
const projects = require(path.join(__dirname, '../', '../', '../', 'controllers', 'projectsController.js'));

router.route('/').get(projects.getRockpaperscissorsHtml)
router.route('/js').get(projects.getRockpaperscissorsJs)
router.route('/css').get(projects.getRockpaperscissorsCss)
router.route('/rockimage').get((req, res) => {res.sendFile(path.join(__dirname, '../', '../', '../', 'projects', 'rock-paper-scissor', 'images', 'rock.png'))})
router.route('/paperimage').get((req, res) => {res.sendFile(path.join(__dirname, '../', '../', '../', 'projects', 'rock-paper-scissor', 'images', 'paper.png'))})
router.route('/scissorsimage').get((req, res) => {res.sendFile(path.join(__dirname, '../', '../', '../', 'projects', 'rock-paper-scissor', 'images', 'scissor.png'))})

module.exports = router;