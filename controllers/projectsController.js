const path = require('path');

//calculator
const getCalculatorHTML = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'Calculator', 'CalculatorFinal.html'));
} 

const getCalculatorCSS = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'Calculator', 'CalculatorFinal.css'));
}

const getCalculatorJS = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'Calculator', 'CalculatorFinal.js'));
}

//rock-paper-scissor

const getRockPaperScissorHTML = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'rock-paper-scissor', 'rock-paper-scissor.html'));
} 

const getRockPaperScissorCSS = (req, res) => {

  reqUrlArray = req._parsedOriginalUrl.href.split('/')
  switch (reqUrlArray[reqUrlArray.length -1]) {
    case 'rockpaperscissorcss':
    res.sendFile(path.join(__dirname, '../', 'projects', 'rock-paper-scissor', 'rock-paper-scissor.css'));
      break;
    case 'rockimage':
      res.sendFile(path.join(__dirname, '../', 'projects', 'rock-paper-scissor', 'images', 'rock.png'))
      break;
    case 'paperimage':
      res.sendFile(path.join(__dirname, '../', 'projects', 'rock-paper-scissor', 'images', 'paper.png'));
      break
    case 'scissorimage':
      res.sendFile(path.join(__dirname, '../', 'projects', 'rock-paper-scissor', 'images', 'scissor.png'));
      break

  }

};

const getRockPaperScissorJS = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'rock-paper-scissor', 'rock-paper-scissor.js'));
};

//tic tac toe
const tictactoeHTML = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'tic-tac-toe', 'tic-tac-toe.html'));
} 

const tictactoeCSS = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'tic-tac-toe', 'tic-tac-toe.css'));
}

const tictactoeJS = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'tic-tac-toe', 'tic-tac-toe.js'));
}


module.exports = { getCalculatorHTML, getCalculatorCSS, getCalculatorJS, getRockPaperScissorHTML, getRockPaperScissorCSS, getRockPaperScissorJS, tictactoeHTML, tictactoeCSS, tictactoeJS };