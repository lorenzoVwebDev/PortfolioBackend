const express = require('express');
const app = express();
const path = require('path')

const staticMiddlewares = () => {
  app.use('/', express.static(path.join(__dirname, '../', 'public')));
  //projects middlware
  app.use('/projects/sendcalculator/', express.static(path.join(__dirname, '../', 'projects', 'Calculator')));
};

module.exports = { staticMiddlewares };