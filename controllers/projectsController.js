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
  res.sendFile(path.join(__dirname, '../', 'projects', 'ToDoList', 'static', 'js', 'main.f224338d.js'));
}

const getTodoListCss = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'ToDoList', 'static', 'css', 'main.500cfb9a.css'));
}
//login page

const getLoginpageHtml = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'loginPage', 'index.html'))
}

const getLoginpageJs = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'loginPage', 'static','js','main.40b58238.js'))
}

const getLoginpageCss = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'loginPage', 'static','css','main.4e0c6ef2.css'))
}
//animal cards

const getAnimalcardsHtml = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'animalCards', 'index.html'))
}

const getAnimalcardsJs = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'animalCards', 'static','js','main.03f65a57.js'))
}

const getAnimalcardsCss = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'animalCards', 'static','css','main.8f866fb1.css'))
}
//product page
const getProductpageHtml = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'productPage', 'index.html'))
}

const getProductpageJs = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'productPage', 'static', 'js', 'main.3b52b789.js'))
}

const getProductpageCss = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'productPage', 'static', 'css', 'main.e7075006.css'))
}
//salad maker
const getSaladmakerHtml = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'saladMaker', 'index.html'))
}

const getSaladmakerJs = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'saladMaker', 'static', 'js', 'main.243ceff8.js'))
}

const getSaladmakerCss = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'saladMaker', 'static', 'css', 'main.691205b0.css'))
}
//text analyzer
const getTextanalyzerHtml = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'textAnalyzer', 'index.html'))
}

const getTextanalyzerJs = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'textAnalyzer', 'static', 'js', 'main.92a2f2cf.js'))
}

const getTextanalyzerCss = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'textAnalyzer', 'static', 'css', 'main.bf4b0317.css'))
}
//file creator
const getFilecreatorHtml = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'filecreator', 'index.html'))
}

const getFilecreatorJs = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'filecreator', 'static', 'js', 'main.35906cda.js'))
}

const getFilecreatorCss = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'filecreator', 'static', 'css', 'main.3b402b19.css'))
}

//redux birds
const getReduxbirdsHtml = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'reduxbirds', 'index.html'))
}

const getReduxbirdsJs = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'reduxbirds', 'static', 'js', 'main.8c7d412b.js'))
}

const getReduxbirdsCss = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'reduxbirds', 'static', 'css', 'main.a2d3a1eb.css'))
}


module.exports = {getCalculatorHtml, getCalculatorJs, getCalculatorCss, getTictactoeHtml, getTictactoeJs, getTictactoeCss, getRockpaperscissorsHtml, getRockpaperscissorsJs, getRockpaperscissorsCss, getTodoListHtml, getTodoListJs, getTodoListCss, getLoginpageHtml, getLoginpageJs, getLoginpageCss, getAnimalcardsHtml, getAnimalcardsJs, getAnimalcardsCss, getProductpageHtml, getProductpageJs, getProductpageCss, getSaladmakerHtml, getSaladmakerJs, getSaladmakerCss, getTextanalyzerHtml, getTextanalyzerJs, getTextanalyzerCss, getFilecreatorHtml, getFilecreatorJs, getFilecreatorCss, getReduxbirdsHtml, getReduxbirdsJs, getReduxbirdsCss}