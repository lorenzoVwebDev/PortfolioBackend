const express = require('express');
const router = express.Router();
const employeesController = require('../../controllers/employeesController');

router.route('/sendcontacts/')
.post(employeesController.addNewContacts)

module.exports = router;