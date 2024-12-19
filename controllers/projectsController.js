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
//rock-paper-scissors
const getRockpaperscissorsHtml = (req, res) => {
  res.header('project-type', 'including-images');
  res.sendFile(path.join(__dirname, '../', 'projects', 'rock-paper-scissor', 'index.html'));
}

const getRockpaperscissorsJs = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'rock-paper-scissor', 'rock-paper-scissor.js'))
}

const getRockpaperscissorsCss = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'rock-paper-scissor', 'rock-paper-scissor.css'))
}
//todo list
const getTodoListHtml = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'ToDoList', 'index.html'));
}

const getTodoListJs = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'ToDoList', 'static', 'js', 'main.70d39762.js'));
}

const getTodoListCss = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'ToDoList', 'static', 'css', 'main.5902730d.css'));
}
//login page

const getLoginpageHtml = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'loginPage', 'index.html'))
}

const getLoginpageJs = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'loginPage', 'static','js','main.ee24a79d.js'))
}

const getLoginpageCss = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'loginPage', 'static','css','main.f855e6bc.css'))
}

module.exports = {getCalculatorHtml, getCalculatorJs, getCalculatorCss, getTictactoeHtml, getTictactoeJs, getTictactoeCss, getRockpaperscissorsHtml, getRockpaperscissorsJs, getRockpaperscissorsCss, getTodoListHtml, getTodoListJs, getTodoListCss, getLoginpageHtml, getLoginpageJs, getLoginpageCss}