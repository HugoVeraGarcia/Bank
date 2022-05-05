// Models
const { User } = require('../models/user.model');

const userExists = async (req, res, next) => {
  try {
    const { accountNumber, password } = req.body;

    const user = await User.findOne({ where: { accountNumber } });

    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found given that accountNumber',
      });
    }
    if (password !== user.password) {
      return res.status(404).json({
        status: 'error',
        message: 'Password wrong',
      });
    }

    // Add user data to the req object
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { userExists };
