const { Transfer } = require('../models/transfer.model');
const { User } = require('../models/user.model');

const getAllTransferens = async (req, res) => {
  try {
    const transfers = await Transfer.findAll();

    res.status(200).json({
      transfers,
    });
  } catch (error) {
    console.log(error);
  }
};

const createTransfs = async (req, res) => {
  try {
    const { amount, accountNumber, accountNumberSender } = req.body;

    const receiverUser = await User.findOne({
      where: { accountNumber: accountNumber },
    });
    const senderUser = await User.findOne({
      where: { accountNumber: accountNumberSender },
    });

    if (!receiverUser || !senderUser) {
      return res
        .status(404)
        .json({ status: 'error', message: 'user not found' });
    }
    if (senderUser.amount < amount) {
      return res
        .status(404)
        .json({ status: 'error', message: 'not enough funds' });
    }

    await receiverUser.update({
      amount: Number(receiverUser.amount) + Number(amount),
    });
    await senderUser.update({
      amount: Number(senderUser.amount) - Number(amount),
    });

    const newTransfer = await Transfer.create({
      senderUserId: senderUser.id,
      receiverUserId: receiverUser.id,
      amount: Number(amount),
    });

    res.status(201).json({ newTransfer });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllTransferens,
  createTransfs,
};
