const express = require('express');
const router = express.Router();
const projects = require('../../controllers/projectsController');

//calculator
router.route('/sendcalculator')
.get(projects.getCalculatorHTML);

router.route('/calculatorcss')
.get(projects.getCalculatorCSS);

router.route('/calculatorjs')
.get(projects.getCalculatorJS);

//rock-paper-scissor

router.route('/rockpaperscissorhtml')
.get(projects.getRockPaperScissorHTML);

router.route('/rockpaperscissorcss')
.get(projects.getRockPaperScissorCSS);

router.route('/rockpaperscissorjs')
.get(projects.getRockPaperScissorJS);

//images
router.route('/rockimage')
.get(projects.getRockPaperScissorCSS);

router.route('/paperimage')
.get(projects.getRockPaperScissorCSS);

router.route('/scissorimage')
.get(projects.getRockPaperScissorCSS);

//tic tac toe

router.route('/tictactoehtml')
.get(projects.tictactoeHTML);

router.route('/tictactoecss')
.get(projects.tictactoeCSS);

router.route('/tictactoejs')
.get(projects.tictactoeJS);




module.exports = router;