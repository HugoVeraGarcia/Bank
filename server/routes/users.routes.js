const express = require('express');
const { body } = require('express-validator');

//middleware
const { userExists } = require('../middlewares/users.middlewares');

const {
  createUserValidations,
  checkUserValidations,
} = require('../middlewares/validations.middlewares');

//router declaration
const router = express.Router();

//import controller functions
const {
  createUser,
  getAllTransferens,
  getLoginUser,
} = require('../controllers/users.controller');

router.get('/:id/history', getAllTransferens);

router.post('/signup', createUserValidations, checkUserValidations, createUser);

router.post('/login', userExists, getLoginUser);
/*
router
  .route('/:id')
  .get(userExist, getUserById)
  .patch(userExist, updateUser)
  .delete(userExist, disableUser);
*/
module.exports = { usersRouter: router };
