const express = require('express');
const router = express.Router();

const employee = require('../controllers/employee.controller');

router.get('/', employee.getEmployees);
router.get('/frontcount', employee.frontendCount);
router.post('/', employee.createEmployees);
router.get('/:id', employee.getEmployee);
router.put('/:id', employee.editEmployee);
router.delete('/:id', employee.deleteEmployee);

module.exports = router;