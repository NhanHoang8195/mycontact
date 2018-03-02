'use strict';
module.exports = (sequelize, DataTypes) => {
  var contact = sequelize.define('contact', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true,
    underscored: false,
    timestamps: false
  });
  return contact;
};
