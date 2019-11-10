'use strict'

module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    //card number should be a string
    cardNumber: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    cardName: {
      type: DataTypes.STRING,
      unique: true,
    },
    expM: {
      type: DataTypes.INTEGER,
    },
    expY: {
      type: DataTypes.INTEGER,
    },
    cvv: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId',
      },
    }
  });

  Card.associate = (models) => {
    Card.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  }

  return Card;
}