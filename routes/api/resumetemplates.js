const express = require('express');
const router = express.Router();
const templates = require('../../controllers/templatescontroller');

//excel templates

router.route('/dashboard')
.get(templates.getExcelTemplates);

router.route('/ganttchart')
.get(templates.getExcelTemplates);

router.route('/Interactiveganttdashboard')
.get(templates.getExcelTemplates);

// PP templates

router.route('/company')
.get(templates.getPowerPointTemplates);

router.route('/department')
.get(templates.getPowerPointTemplates);

router.route('/business')
.get(templates.getPowerPointTemplates);

//resume

router.route('/resume')
.get(templates.getResume);



module.exports = router;
