const path = require('path');


//excel templates
const getExcelTemplates = (req, res) => {

  reqUrlArray = req._parsedOriginalUrl.href.split('/')
  switch (reqUrlArray[reqUrlArray.length -1]) {
    case 'dashboard':
    res.sendFile(path.join(__dirname, '../', 'excel&powerpointfiles', 'excel', 'dashboard.xlsx'));
      break;
    case 'ganttchart':
      res.sendFile(path.join(__dirname, '../', 'excel&powerpointfiles', 'excel', 'ganttchart.xlsx'));
      break;
    case 'Interactiveganttdashboard':
      res.sendFile(path.join(__dirname, '../', 'excel&powerpointfiles', 'excel', 'Interactiveganttdashboard.xlsx'));
      break
  }

};

//excel templates

const getPowerPointTemplates = (req, res) => {

  reqUrlArray = req._parsedOriginalUrl.href.split('/')
  switch (reqUrlArray[reqUrlArray.length -1]) {
    case 'company':
    res.sendFile(path.join(__dirname, '../', 'excel&powerpointfiles', 'powerpoint', '1.pptx'));
      break;
    case 'department':
      res.sendFile(path.join(__dirname, '../', 'excel&powerpointfiles', 'powerpoint', '2.pptx'));
      break;
    case 'business':
      res.sendFile(path.join(__dirname, '../', 'excel&powerpointfiles', 'powerpoint', '3.pptx'));
      break
  }

};

const getResume = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'excel&powerpointfiles', 'resume', 'cv.pdf'));

}

module.exports = { getExcelTemplates, getPowerPointTemplates, getResume }