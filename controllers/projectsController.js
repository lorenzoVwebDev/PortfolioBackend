const path = require('path');
//calculator
const getCalculatorHtml = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'Calculator', 'index.html'));
}

const getCalculatorJs = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'Calculator', 'CalculatorFinal.js'));
}

const getCalculatorCss = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'Calculator', 'CalculatorFinal.css'));
}
//tic-tac-toe
const getTictactoeHtml = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'tic-tac-toe', 'index.html'))
}
const getTictactoeJs = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'tic-tac-toe', 'tic-tac-toe.js'))
}
const getTictactoeCss = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'tic-tac-toe', 'tic-tac-toe.css'))
}

module.exports = {getCalculatorHtml, getCalculatorJs, getCalculatorCss, getTictactoeHtml, getTictactoeJs, getTictactoeCss}