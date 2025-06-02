const express = require('express');
const Router = express.Router()
const path = require('path')
const fs = require('fs')
const fsPromises = require('fs').promises
const { format } = require('date-fns');
const tasksJson = require('../../storage/json.storage/tasks.json')

Router.route('/tasks/*').
  get((req, res) => {
    const {id} = req.query

    if (id === 'ALL') return res.json(tasksJson);

    const task = tasksJson.filter(task => task.id == id)

    res.json(task)

  }).
  post(async (req, res) => {
    console.log(req.body)
    const {name, description, done} = req.body;

    if (!name || !description || done === undefined) return res.status(400).json({"message": "missing-payload-requirements"})
    try {
      const newTaskJson = tasksJson
      newTaskJson.push({
        id: tasksJson.length + 1,
        name,
        description,
        done
      });

      await fsPromises.writeFile(path.join(__dirname, '../', '../','storage/', 'json.storage/', 'tasks.json'), JSON.stringify(newTaskJson))

      res.status(200).json({"message": "task-added"});

    } catch (err) {
      res.status(500)
    }
  }).
  delete(async (req, res) => {
    const urlArray = req.originalUrl.split('/');
    const idString = urlArray[urlArray.length - 1]
    if (!idString.match(/^\d*$/)) return res.status(400).json({'message': 'invalid-request'});
    const id = parseInt(idString, 10)

    let newTasksJson = tasksJson;

    for (let i = id - 1; i < tasksJson.length -1; i++) {
      newTasksJson[i] = tasksJson[i+1];
      newTasksJson[i].id = i + 1
    }; 
    let count = newTasksJson.length - 1

    newTasksJson.splice(count, 1);

    try { 
          await fsPromises.writeFile(path.join(__dirname, '../', '../','storage/', 'json.storage/', 'tasks.json'), JSON.stringify(newTasksJson))
          
          res.status(200).json({'message': `task${id}-deleted`})
        } catch (err) {
          res.status(500)
        }
  }). 
  put(async (req, res) => {
    if (!req.body) return res.status(400).json({'message': 'no-payload'});
    
    const {id, description} = req.body;

    if (!id || !description) return res.status(400).json({'message': 'no-payload-requirements'});
    try {
          const newTaskJson = tasksJson.map((task, index) => {
      if (task.id == id) {
        task.description = description;
        return task
      }

      return task
    })  

    await fsPromises.writeFile(path.join(__dirname, '../', '../','storage/', 'json.storage/', 'tasks.json'), JSON.stringify(newTaskJson))

    res.status(200).json({"message": `task${id}-edited`});
    } catch (err) {
      res.status(500)
    }

  })

Router.route('/contacts/*').
  post(async (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.message) return res.status(401).send('bad request');

    const {name, email, phone, message} = req.body

    if (!fs.existsSync(__dirname, '../../storage/txt.storage/angular.contacs.txt')) return res.status(500)
    
    try {
      const date = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;

      const newString = `${date} || user: ${name} | email: ${email} | phone: ${phone} | message: ${message} ||\n`;

      await fsPromises.appendFile(path.join(__dirname, '../', '../','storage/', 'txt.storage/', 'angular.contacs.txt'), newString);

      res.status(200).json({'message': 'user-saved'})
    } catch (err) {
      res.status(500).send({'message': 'internal error'})
    }

  })

  module.exports = Router