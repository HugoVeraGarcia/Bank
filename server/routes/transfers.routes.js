const express = require('express');
//const { body } = require('express-validator');

//middleware
//const { repairExist } = require('../middlewares/repairs.middleware');

//router declaration
const router = express.Router();

const { createTransfs } = require('../controllers/transfers.controller');

router.post('/', createTransfs);

module.exports = { transfersRouter: router };
