const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Transfer = db.define('transfer', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  amount: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  senderUserId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  receiverUserId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { Transfer };
