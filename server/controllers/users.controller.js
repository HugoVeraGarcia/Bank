const { validationResult } = require('express-validator');

// Models
const { User } = require('../models/user.model');
const { Transfer } = require('../models/transfer.model');

const getAllTransferens = async (req, res) => {
  try {
    const { id } = req.params;
    const { Op } = require('sequelize');
    const transfer = await Transfer.findAll({
      where: { [Op.or]: [{ receiverUserId: id }, { senderUserId: id }] },
    });

    res.status(200).json({
      transfer,
    });
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {
  try {
    const { name, accountNumber, password } = req.body;

    const newUser = await User.create({ name, accountNumber, password });

    res.status(201).json({ newUser });
  } catch (error) {
    console.log(error);
  }
};

const getLoginUser = async (req, res) => {
  try {
    const { accountNumber, password } = req.body;

    const user = await User.findOne({ where: { accountNumber, password } });

    res.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllTransferens,
  createUser,
  getLoginUser,
};
