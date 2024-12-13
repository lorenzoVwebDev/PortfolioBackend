const path = require('path');

const getCalculatorHtml = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'Calculator', 'index.html'));
  
/*   reqUrlArray = req._parsedOriginalUrl.href.split('/');
  console.log(reqUrlArray[reqUrlArray.length -1])
  switch (reqUrlArray[reqUrlArray.length -1]) {
    case 'html':
      res.sendFile(path.join(__dirname, '../', 'projects', 'Calculator', 'index.html'));
    case 'css':
      res.sendFile(path.join(__dirname, '../', 'projects', 'Calculator', 'CalculatorFinal.css'));
    case 'js': 
    res.sendFile(path.join(__dirname, '../', 'projects', 'Calculator', 'CalculatorFinal.js')); 
  }  */
}

const getCalculatorJs = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'Calculator', 'CalculatorFinal.js'));
}

const getCalculatorCss = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'projects', 'Calculator', 'CalculatorFinal.css'));
}





const getOther = (req, res) => {
}
module.exports = { getCalculatorHtml, getCalculatorJs, getCalculatorCss }